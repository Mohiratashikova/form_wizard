import React from "react";
import { Component } from "react";
import Button from "./Button";
import "../styles/form.css";
import { connect } from "react-redux";
import { pageChange, updateCheckbox } from "../redux/actions/dataActions";
import image1 from "../images/choice1.png";
import image2 from "../images/choice2.png";
class Checkbox extends Component {
  state = {
    choicePicture: this.props.choicePicture || 0,
    choice2: this.props.choice2 || "",
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
      this.props.updateCheckbox(
        this.state.choicePicture,
        this.state.choice2,
        this.props.user
      );
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleBack = () => {
    this.props.pageChange("message");
  };

  render = () => {
    const { loading } = this.props.UI;
    return (
      <div>
        <p>Step 3/3</p>
        <h4>Checkbox</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-line">
            <div className="form-input choice">
              <label>
                <input
                  type="radio"
                  name="choicePicture"
                  value="one"
                  checked={this.state.choicePicture === "one"}
                  onChange={this.handleChange}
                />
                <img alt="post" src={image1} className="form-image" />
              </label>

              <label>
                <input
                  type="radio"
                  name="choicePicture"
                  value="two"
                  checked={this.state.choicePicture === "two"}
                  onChange={this.handleChange}
                />
                <img alt="online" src={image2} className="form-image" />
              </label>
            </div>
          </div>
          <div className="errors">
            {!this.state.choicePicture && this.state.submitted && (
              <span>Must choose one</span>
            )}
          </div>
          <div>
            <div className="form-radio">
              <input
                type="radio"
                name="choice2"
                value="one"
                id="one"
                checked={this.state.choice2 === "one"}
                onChange={this.handleChange}
              />
              <label htmlFor="one" className="radio">
                I want to add this option.
              </label>
            </div>
            <div className="form-radio">
              <input
                type="radio"
                name="choice2"
                value="two"
                id="two"
                checked={this.state.choice2 === "two"}
                onChange={this.handleChange}
              />
              <label htmlFor="two" className="radio">
                Let me click on this checkbox and choose some cool stuff.
              </label>
            </div>
          </div>
          <div className="errors">
            {!this.state.choice2 && this.state.submitted && (
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
              name={loading ? "Loading..." : "Submit"}
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
  choice2: state.data.user.choice2,
  choicePicture: state.data.user.choicePicture,
  user: state.data.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { pageChange, updateCheckbox })(
  Checkbox
);
