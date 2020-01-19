import React from "react";
import ReactDOM from "react-dom";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import rentService from "../../services/rentService";
import OneCard from "./OneCard";

class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  hundelRent() {}

  render() {
    //     return ReactDOM.createPortal(
    //       <aside className="modal-cover">
    //         <div className="modal-area">
    //           <button className="_modal-close">
    //             <span id="close-modal" className="_hide-visual">
    //               Close
    //             </span>
    //             <svg className="_modal-close-icon" viewBox="0 0 40 40">
    //               <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
    //             </svg>
    //           </button>
    //           <div className="modal-body">The Actual Content in the Modal</div>
    //         </div>
    //       </aside>,
    //       document.body
    //     );
    //   }
    // }
    return (
      <h1>this is </h1>
      //   <div className="card text-center">
      //     <div>
      //       <img src={this.props.product.image} className="card-img-top" />
      //     </div>
      //     <div className="card-body text-dark">
      //       <Card.Body>
      //         <Card.Title className="cardText">
      //           {this.props.product.name}
      //         </Card.Title>
      //         <Card.Text className="cardText text-secondary">
      //           {this.props.product.description}
      //         </Card.Text>
      //         <Card.Text className="price text-secondary">
      //           {this.props.product.price_rent}
      //         </Card.Text>
      //       </Card.Body>
      //     </div>
      //     <a href="#" className="btn btn-outline-success">
      //       Confirm Rent
      //     </a>
      //     <Rent />
      // </div>
    );
  }
}
export default Rent;
