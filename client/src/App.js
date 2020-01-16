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

import AddProduct from "./components/Product/AddProduct";
import Login from "./components/User/logIn";
import Signup from "./components/User/signup";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />

        <br></br>
        <br></br>
        <Signup />
        <AddProduct />
      </div>
    );
  }
}

export default App;
