import React, { Component } from "react";

import productService from "../../services/productService";
import { Link } from "react-router-dom";
import Rent from "./Rent";

import ReactDOM, { render } from "react-dom";
import img1 from "../../1.jpg";
import "../../card-style.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import BtnRentTrigger from "./BtnRentTrigger";

class BtnRent extends Component {
  constructor(props) {
    super(props);
    console.log("propsrentbtn", this.props);
    this.state = {
      product: {}
    };
  }

  render() {
    return <BtnRentTrigger triggerprops={this.props.rentprops} />;
  }
}
export default BtnRent;
