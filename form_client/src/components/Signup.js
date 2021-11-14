import React from "react";
import { Component } from "react";
import Button from "./Button";
import "../styles/form.css";
import { connect } from "react-redux";
import { checkEmail } from "../redux/actions/dataActions";
class Signup extends Component {
  state = {
    address: this.props.address || "",
    lastName: this.props.lastName || "",
    firstName: this.props.firstName || "",
    email: this.props.email || "",
    birthday: this.props.birthday || "",
    submitted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
    let canSubmit = true;
    let counter = 0;
    for (const prop in this.state) {
      if (!this.state[prop]) {
        canSubmit = false;
        counter += 1;
      }
    }
    if (counter === 1 && !this.state.submitted) {
      canSubmit = true;
    }

    if (canSubmit) {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        email: this.state.email,
        birthday: this.state.birthday,
      };
      this.props.checkEmail(user);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render = () => {
    const { loading, errors } = this.props.UI;

    return (
      <div>
        <p>Step 1/3</p>
        <h4>Sign UP</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-line">
            <div
              className={
                !this.state.firstName && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <div className="errors">
                {!this.state.firstName && this.state.submitted && (
                  <span>Must not be empty</span>
                )}
              </div>
            </div>
            <div
              className={
                !this.state.lastName && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <div className="errors">
                {!this.state.lastName && this.state.submitted && (
                  <span>Must not be empty</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-line">
            <div
              className={
                !this.state.birthday && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="birthday">Date of Birth</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
              <div className="errors">
                {!this.state.birthday && this.state.submitted && (
                  <span>Must not be empty</span>
                )}
              </div>
            </div>
            <div
              className={
                !this.state.email && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div className="errors">
                {!this.state.email && this.state.submitted && (
                  <span>Must not be empty</span>
                )}

                {errors && errors.error && <span>{errors.error}</span>}
              </div>
            </div>
          </div>
          <div className="form-line">
            <div
              className={
                !this.state.address && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <div className="errors">
                {!this.state.address && this.state.submitted && (
                  <span>Must not be empty</span>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="form-button">
            <Button
              name={loading ? "Loading..." : "Next Step"}
              className="next"
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  address: state.data.user.address,
  lastName: state.data.user.lastName,
  firstName: state.data.user.firstName,
  email: state.data.user.email,
  birthday: state.data.user.birthday,
  UI: state.UI,
});

export default connect(mapStateToProps, { checkEmail })(Signup);
