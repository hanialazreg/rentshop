import React, { Component } from "react";

import productService from "../../services/productService";

import ReactDOM from "react-dom";
import img1 from "../../1.jpg";
import "../../card-style.css";
import { Card, Button, Row, Col } from "react-bootstrap";
class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    let id = this.props.product.id;
    console.log("oooooo", this.props.product._id);

    productService.getOneProduct(id).then(res => {
      this.setState({
        product: res.data
      });
    });
  }

  //
  render() {
    return (
      <div onClick={this.onClick}>
        <div className="card text-center">
          <div>
            <img src={this.props.product.image} className="card-img-top" />
          </div>
          <div className="card-body text-dark">
            <Card.Body>
              <Card.Title className="cardText">
                {this.props.product.name}
              </Card.Title>
              <Card.Text className="cardText text-secondary">
                {this.props.product.description}
              </Card.Text>

              <Card.Text className="price text-secondary">
                {this.props.product.price_rent}
              </Card.Text>

              <a href="#" className="btn btn-outline-success">
                <link to="./Rent.js"></link>
                Rent
              </a>
            </Card.Body>
          </div>
        </div>
      </div>
    );
  }
}

export default OneCard;
