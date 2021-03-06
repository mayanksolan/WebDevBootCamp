import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/index";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { name, email, password, password2 } = this.state;
    console.log(this.state);
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      this.props.register({ name, email, password });
    }
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.onSubmit}>
          <div>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label>
              <b>Name</b>
              <input
                type="text"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                required
              />
            </label>

            <label>
              <b>Email</b>
              <input
                type="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required
              />
            </label>

            <label>
              <b>Password</b>
              <input
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                required
              />
            </label>

            <label>
              <b>Repeat Password</b>
              <input
                type="password"
                placeholder="Repeat Password"
                value={this.state.password2}
                onChange={this.handleChange}
                name="password2"
                required
              />
            </label>

            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>

          <div className="container-signin">
            <p>
              Already have an account? <Link to="/login">Sign in</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
