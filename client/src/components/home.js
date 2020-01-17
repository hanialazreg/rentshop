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

import LogIn from "./components/User/LogIn.js";
import SignUp from "./components/User/signup";
import "bootstrap/dist/css/bootstrap.min.css";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
}

export default Home;
