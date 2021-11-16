import React, { Component } from "react";
import { connect } from "react-redux";
import { submitUser } from "../redux/actions/dataActions";
import Button from "./Button";
import "../styles/form.css";
class Summary extends Component {
  handleClick = () => {
    this.props.submitUser(this.props.user);
  };
  render = () => {
    const {
      email,
      lastName,
      firstName,
      address,
      birthday,
      choice,
      choicePicture,
      choice2,
    } = this.props.user;
    const { loading } = this.props.UI;
    return (
      <div className="summary">
        <div className="data">
          <p>Email:</p> <span>{email}</span>
        </div>
        <div className="data">
          <p>Last Name:</p> <span>{lastName}</span>
        </div>
        <div className="data">
          <p>First Name: </p>
          <span>{firstName}</span>
        </div>
        <div className="data">
          <p>Address: </p>
          <span>{address}</span>
        </div>
        <div className="data">
          <p>Birthday: </p>
          <span>{birthday}</span>
        </div>
        <div className="data">
          <p>Choice: </p>
          <span>{choice}</span>
        </div>
        <div className="data">
          <p>Choice on picture: </p>
          <span>{choicePicture}</span>
        </div>
        <div className="data">
          <p>Choice 2: </p>
          <span>{choice2}</span>
        </div>

        <div onClick={this.handleClick}>
          <Button name={loading ? "Loading..." : "Confirm"} className="next" />
        </div>
      </div>
    );
  };
}
const mapStateToProps = (state) => ({
  user: state.data.user,
  UI: state.UI,
});
export default connect(mapStateToProps, { submitUser })(Summary);
