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
import { Row, Col, Card, Container } from "react-bootstrap";

import "./App.css";
import AllProductsCards from "./components/Product/AllProductCards";
import AllProductCards from "./components/Product/AllProductCards";

class App extends React.Component {
  render() {
    return (
      <div>
        <AllProductCards />
        <Router>
          <Route path="/" component={Navb} />
        </Router>
        <Container>
          <Row xs={6} md={4}>
            <Col>
              <Image className="home-cl" src="sofa.png" thumbnail />
            </Col>
          </Row>
          <Row xs={6} md={4}>
            <Col>
              <Image className="home-cl" src="cont.jpg" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
