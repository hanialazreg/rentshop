import React, { Component } from "react";

import productService from "../../services/productService";
import { Link } from "react-router-dom";
import Rent from "./Rent";

import ReactDOM, { render } from "react-dom";
import img1 from "../../1.jpg";
import "../../card-style.css";
import { Card, Button, Row, Col } from "react-bootstrap";

class BtnRentTrigger extends Component {
  constructor(props) {
    super(props);
    console.log("propsbtntrigger", this.props);
    this.state = {};
  }
  render() {
    return <button className="btn btn-outline-success">Rent</button>;
  }
}
export default BtnRentTrigger;
