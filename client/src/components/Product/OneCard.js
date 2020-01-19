import React, { Component } from "react";

import productService from "../../services/productService";
import { Link } from "react-router-dom";
import Rent from "./Rent";
import BtnRent from "./BtnRent";
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
    this.onClickRent = this.onClickRent.bind(this);
  }
  onClick() {
    let id = this.props.product._id;
    console.log("oooooo", this.props.product._id);

    productService
      .getOneProduct(id)
      .then(res => {
        this.setState({
          product: res.data
        });
      })
      .catch(err => {
        throw err;
      });
  }
  onClickRent() {
    console.log("ooooo", this.props.product);
    return <Rent item={this.props.product} />;
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

              {/* <Link to={`/products/${this.props.product._id}`}> */}

              {/* </Link> */}
            </Card.Body>
          </div>

          <BtnRent rentprops={this.props} />
        </div>
      </div>
    );
  }
}

export default OneCard;
