import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Card, Ratio } from 'react-bootstrap';
import "../css/Product.css"

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.viewProduct = this.viewProduct.bind(this);
    }

      viewProduct(){
        this.props.history.push('/products/'+this.props.obj._id);
      }


      render(){
          return(
              <div className="col-lg-3 col-md-6 col-12" >
                  <Card className="productCard m-2">
                      <Card.Img variant="top" style={{ width: "100%", height: "20vw", objectFit: "contain" }}
                          src={`/uploads/${this.props.obj.productImage}`} onClick={this.viewProduct}
                      />
                      <Card.Body onClick={this.viewProduct}>
                          <Card.Title style={{ textAlign: 'left' }}>{this.props.obj.productName}</Card.Title>
                          <Card.Text style={{ textAlign: 'left' }}>
                              {this.props.obj.productType}
                          </Card.Text>
                          <Card.Text style={{ textAlign: 'left' }}>
                              ${this.props.obj.productPrice.toFixed(2)}
                          </Card.Text>
                      </Card.Body>
                      <Button onClick={this.viewProduct} variant="outline-light" className="text-muted">
                          <small>View Product</small>
                      </Button>
                  </Card>
              </div>

          );

      }
}