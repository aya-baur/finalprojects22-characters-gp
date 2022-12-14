import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import config from '../config'

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        //setup SubmitForm methods
        //bind methods to pass to other components
        this.saveProfile = this.saveProfile.bind(this);
        this.verifyProfile = this.verifyProfile.bind(this);
        //setup SubmitForm state
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            warnings: {
                email: '',
                firstName: '',
                lastName: ''
            }
        }
    }

    componentDidMount() {
        axios.get(config.backend + '/users/' + this.props._id)
            .then(res => {
                this.setState({
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    async saveProfile(e) {
        e.preventDefault();

        const newWarnings = await this.verifyProfile()
        if (Object.keys(newWarnings).length > 0) {
            this.setState({ warnings: newWarnings })
            return
        }
        const data = {
            email: this.state.email
        };
        axios.put(config.backend + '/users/' + this.props._id, data)
            .then(res => {
                this.props.setToast('Profile successfully updated')
                this.setState({
                    warnings: {
                        email: ''
                    }
                })
            });


    }
    savePassword(e) {
        e.preventDefault();
        console.log(this.state)
    }

    async verifyProfile() {
        let newWarnings = {}
        if (!this.state.firstName) {
            newWarnings.firstName = 'Please provide a first name.'
        }
        if (!this.state.lastName) {
            newWarnings.lastName = 'Please provide a last name.'
        }
        if (!this.state.email) {
            newWarnings.email = 'Please provide a valid email.'
        }
        else if (!String(this.state.email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            newWarnings.email = 'Invalid email.'
        } else {
            let res = await axios.get(config.backend + '/users/?email=' + this.state.email, this.state);
            console.log(res.data)
            if (res.data.length > 0 && res.data[0]._id != this.props._id) {
                newWarnings.email = 'An account already exists with this email.'
            }
        }
        return new Promise((res, rej) => res(newWarnings));
    }


    render() {
        return (<div>

            <Card className="text-start p-4">
                <h2 className="mb-4">Profile</h2>
                <Form noValidate onSubmit={this.saveProfile}>
                    <Form.Group controlId="firstName" className="mb-3">
                        <Form.Label>
                            First Name
                        </Form.Label>
                        <Form.Control required type="text"
                            onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName} isInvalid={!!this.state.warnings.firstName}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {this.state.warnings.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="lastName" className="mb-3">
                        <Form.Label>
                            Last Name
                        </Form.Label>
                        <Form.Control required type="text"
                            onChange={(e) => this.setState({ lastName: e.target.value })} value={this.state.lastName} isInvalid={!!this.state.warnings.lastName}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {this.state.warnings.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control required type="text"
                            onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} isInvalid={!!this.state.warnings.email}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {this.state.warnings.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button size="md" block="block" type="submit" className="mt-4">
                        Save
                    </Button>
                </Form>
            </Card>
        </div>
        )
    }
}