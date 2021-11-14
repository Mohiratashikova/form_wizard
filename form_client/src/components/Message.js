import React from "react";
import { Component } from "react";
import Button from "./Button";
import "../styles/form.css";
import { connect } from "react-redux";
import { pageChange, updateMessage } from "../redux/actions/dataActions";
class Message extends Component {
  state = {
    message: this.props.message || "",
    choice: this.props.choice || "",
    submitted: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // checkInputs
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
      this.props.updateMessage(this.state.message, this.state.choice);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleBack = () => {
    console.log("here finally");
    this.props.pageChange("signup");
  };

  render = () => {
    return (
      <div>
        <p>Step 2/3</p>
        <h4>Message</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-line">
            <div
              className={
                !this.state.message && this.state.submitted
                  ? "form-input error"
                  : "form-input"
              }
            >
              <label htmlFor="mesage">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                cols="50"
                rows="5"
              />
              <div className="errors">
                {!this.state.message && this.state.submitted && (
                  <span>Must not be empty</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-radio-line">
            <div className="form-radio">
              <input
                type="radio"
                name="choice"
                value="one"
                id="one"
                checked={this.state.choice === "one"}
                onChange={this.handleChange}
              />
              <label htmlFor="one" className="radio">
                The number one choice
              </label>
            </div>
            <div className="form-radio">
              <input
                type="radio"
                name="choice"
                value="two"
                id="two"
                checked={this.state.choice === "two"}
                onChange={this.handleChange}
              />
              <label htmlFor="two" className="radio">
                The number two choice
              </label>
            </div>
          </div>
          <div className="errors">
            {!this.state.choice && this.state.submitted && (
              <span>Must choose one</span>
            )}
          </div>
          <hr />
          <div className="form-button">
            <div onClick={this.handleBack}>
              <Button name="Back" className="back" type="button" />
            </div>
            <Button
              onClick={this.handleSubmit}
              name="Next Step"
              className="next"
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  message: state.data.user.message,
  choice: state.data.user.choice,
});

export default connect(mapStateToProps, { pageChange, updateMessage })(Message);
