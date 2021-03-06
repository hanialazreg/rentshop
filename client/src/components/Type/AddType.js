import React from "react";
import { Button, Form, Alert, Modal } from "react-bootstrap";
import typeService from "../../services/typeService";

class AddType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type_name: "",

      show: false,
      alert: "success",
      message: "Email already exist",
      showModal: true
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("dddddddddddddddddddddd", this.state.type_name);
    typeService
      .add(this.state)
      .then(response => {
        this.setState({
          show: true,
          alert: "success",
          message: "Successful"
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          show: true,
          alert: "danger",
          message: "type already exist"
        });
      });
  }

  onChange(e) {
    this.setState({
      type_name: e.target.value
    });
  }

  render() {
    return (
      <Modal
        className="signup"
        show={this.props.showModal}
        onHide={() => {
          this.props.onHide();
        }}
      >
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Alert variant={this.state.alert} show={this.state.show} dismissible>
            {this.state.message}
          </Alert>
          <Form.Row>
            <Form.Group controlId="formGridName">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type Name"
                value={this.state.type_name}
                onChange={e => {
                  this.onChange(e);
                }}
                // name="name"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" onClick={this.handleSubmit}>
            Add new Typeee
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default AddType;
