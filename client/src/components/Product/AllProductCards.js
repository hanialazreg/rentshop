import React, { Component } from "react";
import Card from "./OneCard";
import { render } from "react-dom";
import productService from "../../services/productService";
import OneCard from "./OneCard";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
class AllProductCards extends Component {
  constructor(props) {
    super(props);
    console.log("ppppppppppppppppp", this.props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    // all products

    productService.getProducts().then(res => {
      this.setState({
        products: res.data
      });
    });
  }
  componentWillReceiveProps(newProps) {
    console.log("home compenent====>", newProps);
    this.setState({ products: newProps.products });
  }

  render() {
    return (
      <div>
        {/* <Container>
          {this.state.products.map(product => {
            return <OneCard product={product} />;
          })}
        </Container> */}
        <Container>
          {this.state.products.map(product => {
            return (
              <Link to={`/product?id=${product._id}`}>
                {" "}
                <OneCard product={product} />{" "}
              </Link>
            );
          })}
        </Container>
      </div>
    );
  }
}
export default AllProductCards;
