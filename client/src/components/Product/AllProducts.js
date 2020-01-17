import React, { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import img1 from "../../../public/1.jpg";

import { Card, Button, Row, Col } from "react-bootstrap";
class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card text-center">
        <div>
          <img src={img1} />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Card Title </h4>
        </div>
      </div>
    );
  }
}

export default AllProducts;
