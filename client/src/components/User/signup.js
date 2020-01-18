import React from "react";
import { sign } from "jsonwebtoken";
import signupService from "../../services/signupService";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      alert: { state: false, text: "", variant: "" }
    };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    signupService.regester(this.state).then(res => {
      if (res.status === 404) {
        this.setState({
          alert: {
            state: true,
            text: res.data._message || res.data,
            variant: "danger"
          }
        });
      }
      if (res.status === 200) {
        this.setState({
          alert: {
            state: true,
            variant: "success",
            text: "Sign up Successful wait to be reddirected "
          }
        });
      }
    });
  };
  render() {
    return (
      <form>
        {" "}
        onSubmit={this.onSubmit}
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}

export default Signup;
