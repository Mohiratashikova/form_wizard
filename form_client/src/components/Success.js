import React, { Component } from "react";
import { connect } from "react-redux";
import { pageChange } from "../redux/actions/dataActions";
import Button from "./Button";
class Success extends Component {
  handleClick = () => {
    this.props.pageChange("signup");
  };
  render = () => {
    return (
      <div>
        <h2>User registered successfully!</h2>
        <div onClick={this.handleClick}>
          <Button name="Sign up again" className="next" />
        </div>
      </div>
    );
  };
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { pageChange })(Success);
