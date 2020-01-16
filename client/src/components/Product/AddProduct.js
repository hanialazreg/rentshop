import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import typeService from "../../services/typeService";
import AddCategory from "../category/AddCategory";
import AddType from "../Type/AddType";

class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      image: "",
      price_rent: "",
      type_rent: "",
      category: "",
      itemsCategory: [],
      itemsType: [],
      store: "",
      show: false,
      show1: false
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.handleGetAllCategories();
    this.handleGetAllTypes();
  }

  handleGetAllCategories() {
    categoryService.getAllCategories().then(res => {
      this.setState({
        itemsCategory: res.data
      });
    });
  }
  handleGetAllTypes() {
    typeService.getTypes().then(res => {
      console.log("tyyypes", res.data);
      this.setState({
        itemsType: res.data
      });
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    //   later
    productService
      .add(this.state)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log("myErr", err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  hundleChangeCategory(e) {
    e.preventDefault();
    this.setState({
      category: e.target.value
    });
  }
  showModalCategory() {
    this.setState({
      show: true
    });
  }
  hundleChangeType(e) {
    e.preventDefault();
    this.setState({
      type_rent: e.target.value
    });
  }
  showModalType() {
    this.setState({
      show1: true
    });
  }
  onHideCategory() {
    this.setState({
      show: false
    });
    this.handleGetAllCategories();
  }
  onHideType() {
    this.setState({
      show1: false
    });
    this.handleGetAllTypes();
  }
  render() {
    return (
      <div className="addProduct">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <AddCategory
            showModal={this.state.show}
            onHide={() => this.onHideCategory()}
          ></AddCategory>
          <AddType
            showModal={this.state.show1}
            onHide={() => this.onHideType()}
          ></AddType>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name here "
                value={this.state.name}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="description here "
                value={this.state.description}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="image URL here "
                value={this.state.image}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price_rent"
                placeholder="Price here "
                value={this.state.price_rent}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formRent">
              <Form.Label>Type Rent</Form.Label>
              {/* should be modifyed after creating a type component dooooo nooot forgeeeeeeeeeeeeeeet  */}
              <InputGroup>
                <Form.Control
                  aria-describedby="basic-addon1"
                  as="select"
                  onChange={e => {
                    this.hundleChangeType(e);
                  }}
                >
                  <option>Choose...</option>
                  {this.state.itemsType.map(typ => {
                    return <option value={typ._id}>{typ.type_name}</option>;
                  })}
                </Form.Control>
                <InputGroup.Append>
                  <Button
                    onClick={() => this.showModalType()}
                    variant="outline-secondary"
                  >
                    Add Type
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formStore">
              <Form.Label>Store</Form.Label>
              <Form.Control
                type="Number"
                name="store"
                placeholder="store"
                value={this.state.store}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <InputGroup>
                <Form.Control
                  aria-describedby="basic-addon1"
                  as="select"
                  onChange={e => {
                    this.hundleChangeCategory(e);
                  }}
                >
                  <option>Choose...</option>
                  {this.state.itemsCategory.map(cat => {
                    return <option value={cat._id}>{cat.name}</option>;
                  })}
                </Form.Control>
                <InputGroup.Append>
                  <Button
                    onClick={() => this.showModalCategory()}
                    variant="outline-secondary"
                  >
                    Add Category
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
