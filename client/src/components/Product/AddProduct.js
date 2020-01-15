import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import productService from "../../services/productService";

class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      image: "",
      price_rent: "",
      type_rent: "",
      store: ""
    };
  }
  hundelSubmit(event) {
    event.preventDefault();
    //   later
  }

  render() {
    return (
      <div className="addProduct">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name here " />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="description here " />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="image URL here " />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price here " />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Type Rent</Form.Label>
            {/* should be modifyed after creating a type component dooooo nooot forgeeeeeeeeeeeeeeet  */}
            <Form.Control type="text" placeholder="type here " />
          </Form.Group>

          <Form.Group controlId="formStore">
            <Form.Label>Store</Form.Label>
            <Form.Control type="Number" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
