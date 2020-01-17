import React from "react";
import {
  Button,
  Form,
  Alert,
  Modal,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Carousel,
  Jumbotron
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "./User/signup";

class Navb extends React.Component {
  constructor() {
    super();
    this.state = {
      showModalSignUp: false,
      showModalLogin: false
    };

    this.handleShow = this.handleShow.bind(this);
  }

  // ///////////////// dir for view
  handleShow(target) {
    this.setState({
      [`showModal${target}`]: !this.state[`showModal${target}`]
    });
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>RBK Rent Shop</Navbar.Brand>
        </Link>
        <Nav.Link to="/products">Products</Nav.Link>
        <Nav.Link
          onClick={() => {
            this.handleShow("products");
          }}
        >
          SignUp
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            this.handleShow("SignUp");
          }}
        >
          Login
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navb;
