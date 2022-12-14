import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavbarBrand, NavDropdown, Toast, ToastContainer } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './components/SignUp'
import StoryDetails from './components/StoryDetails'
import Login from './components/Login'
import StoriesList from './components/StoriesList'
import SubmitStory from './components/SubmitStory'
import SubmitProduct from './components/SubmitProduct'
import ProfileInfo from './components/ProfileInfo'
import ShoppingCart from './components/ShoppingCart'
import ProductStore from './components/ProductStore'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'
import OrderHistory from './components/OrderHistory'
import OrderDetails from './components/OrderDetails'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import CustomerOrders from './components/CustomerOrders'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
    this.setToast = this.setToast.bind(this);
    this.state = {
      user: null,
      toast: {
        show: false,
        msg: ''
      }
    };
  }
  //componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    const userData = localStorage.getItem('user')
    if (userData !== null) {
      const parsedData = JSON.parse(userData)
      this.setState({ user: parsedData })
    }
  }

  // this function is passed in the SignUp and Login components to change the user state.
  signIn(data) {
    this.setState({ user: data })
    localStorage.setItem('user', JSON.stringify(data))
    this.setToast("Signed in!")
    console.log(this.state.user)
  }

  signOut() {
    localStorage.removeItem('user')
    this.setState({ user: null })
    this.setToast("Signed out.")
  }

  setToast(message) {
    this.setState({ toast: { show: true, msg: message } })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                  Characters
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <Nav>
                    <Link to={'/'} className="nav-link">
                      Home
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={'/ProductStore'} className="nav-link">
                      Store
                    </Link>
                  </Nav>
                  {this.state.user !== null && this.state.user['type'] === 3 &&
                    (<><Nav>
                      <Link to={'/SubmitProduct'} className="nav-link">
                        Add Product
                      </Link>
                    </Nav>
                      <Nav>
                        <Link to={'/StoriesList'} className="nav-link">
                          Story Statuses
                        </Link>
                      </Nav></>)}
                  <Nav>
                    <Link to={'/submitStory'} className="nav-link">
                      Submit a story
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={'/shoppingCart'} className="nav-link">
                      My Cart
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={'/contactUs'} className="nav-link">
                      Contact Us
                    </Link>
                  </Nav>
                  {this.state.user === null ?
                    <Nav>
                      <Link to={'/signup'} className="nav-link">
                        Sign Up
                      </Link>
                    </Nav> :
                    <NavDropdown title="Profile" id="navbarScrollingDropdown">
                      {this.state.user['type'] === 3 ?
                      <NavDropdown.Item href={'/CustomerOrders'}>
                      Customer Orders
                      </NavDropdown.Item>
                      :
                      <NavDropdown.Item href={'/OrderHistory/' + this.state.user._id}>
                      Order History
                      </NavDropdown.Item>
                      }
                      <NavDropdown.Item href={'/profile/' + this.state.user._id}>
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Item href={'/ProductStore'} onClick={this.signOut}>
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar >
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/signup"
                      render={(props) => <SignUp {...props} signIn={this.signIn} />} />

                    <Route
                      exact
                      path="/Login"
                      component={(props) => <Login {...props} signIn={this.signIn} />}
                    />
                    <Route
                      exact
                      path="/StoriesList"
                      render={(props) => <StoriesList {...props} />} />
                    <Route
                      exact
                      path="/submitStory"
                      component={(props) => <SubmitStory {...props} user={this.state.user} />} />
                    <Route
                      exact
                      path="/stories/:id"
                      render={(props) => <StoryDetails {...props} />}
                    />
                    <Route
                      exact
                      path="/products/:id"
                      render={(props) => <ProductDetails {...props} user={this.state.user} setToast={this.setToast} />}
                    />
                    <Route
                      exact
                      path="/SubmitProduct"
                      render={(props) => <SubmitProduct {...props} user={this.state.user} />}
                    />
                    <Route
                      path="/profile/:id"
                      render={(props) => <ProfileInfo {...props} setToast={this.setToast} />}
                    />
                    <Route
                      exact
                      path="/shoppingCart"
                      render={(props) => <ShoppingCart {...props} />}
                    />
                    <Route
                      exact
                      path="/ProductStore"
                      render={(props) => <ProductStore {...props}/>}
                    />
                    <Route
                      exact
                      path="/Checkout"
                      render={(props) => <Checkout {...props} user={this.state.user} setToast={this.setToast} />}
                    />
                    <Route
                      exact
                      path="/OrderHistory/:id"
                      render={(props) => <OrderHistory {...props} />}
                    />
                    <Route
                      exact
                      path="/OrderDetails/:id"
                      render={(props) => <OrderDetails {...props} setToast={this.setToast} />}
                    />
                    <Route
                      exact
                      path="/CustomerOrders"
                      render={(props) => <CustomerOrders {...props} user={this.state.user} />}
                    />
                    <Route
                      exact
                      path="/ContactUs"
                      render={(props) => <ContactUs {...props} setToast={this.setToast} />}
                    />
                    <Route
                      exact
                      path="/"
                      render={(props) => <Home {...props} />}
                    />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </Router >
        <ToastContainer position="bottom-end" className="p-3">
          <Toast bg='primary' onClose={() => this.setState({ toast: { show: false } })} show={this.state.toast.show} delay={2000} autohide>
            <Toast.Body className='text-white'>{this.state.toast.msg}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div >
    )
  }
}
export default App