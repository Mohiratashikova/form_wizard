import React, { Component } from "react";
import "../styles/form.css";
import { connect } from "react-redux";
import Signup from "./Signup";
import Message from "./Message";
import Checkbox from "./Checkbox";
import Index from "./Index";
import Success from "./Success";
class Form extends Component {
  render() {
    const { page, messageDone } = this.props;

    return (
      <div className="form-container">
        <ol className="menu">
          <li>
            <Index name="1" styling={page === "signup" ? "current" : "done"} />
            Sign Up
          </li>
          <li>
            <Index
              name="2"
              styling={
                page === "message" ? "current" : messageDone ? "done" : "other"
              }
            />
            Message
          </li>
          <li>
            <Index
              name="3"
              styling={page === "checkbox" ? "current" : "other"}
            />
            Checkbox
          </li>
        </ol>
        <hr />
        {page === "signup" ? (
          <Signup />
        ) : page === "message" ? (
          <Message />
        ) : page === "checkbox" ? (
          <Checkbox />
        ) : (
          <Success />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.data.page,
  messageDone: state.data.user.messageDone,
});

export default connect(mapStateToProps)(Form);
