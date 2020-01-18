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
import { Link, BrowserRouter } from "react-router-dom";
import SignUp from "./User/signup";

class Navb extends React.Component {
  constructor() {
    super();
    this.state = {
      // showModalSignUp: false,
      // showModalLogin: false
    };

    // this.handleShow = this.handleShow.bind(this);
  }

  // ///////////////// dir for view
  // handleShow(target) {
  //   this.setState({
  //     [`showModal${target}`]: !this.state[`showModal${target}`]
  //   });
  // }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>RBK Rent Shop</Navbar.Brand>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </Navbar>
    );
  }
}

export default Navb;
