import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/Product/AddProduct";
import Login from "./components/User/logIn";
import Signup from "./components/User/signup";
import Navb from "./components/Navb";
import Rent from "./components/Product/Rent";
import { Row, Col, Card, Container } from "react-bootstrap";

import "./App.css";

import AllProductCards from "./components/Product/AllProductCards";
import Home from "./components/Product/home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navb />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={AllProductCards} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/products/:id" component={Rent} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
