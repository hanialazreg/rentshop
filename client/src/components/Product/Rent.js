import React from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import rentService from "../../services/rentService";

class Rent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
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
          </Card.Body>
        </div>
        <a href="#" className="btn btn-outline-success">
          Confirm Rent
        </a>
      </div>
    );
  }
}
export default Rent;
