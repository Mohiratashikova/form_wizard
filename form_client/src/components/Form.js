import React, { Component } from "react";
import "../styles/form.css";
import { connect } from "react-redux";
import Signup from "./Signup";
import Message from "./Message";
import Checkbox from "./Checkbox";
import Index from "./Index";
import Success from "./Success";
import Summary from "./Summary";
class Form extends Component {
  render() {
    const { page, messageDone, checkboxDone } = this.props;

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
              styling={
                page === "checkbox"
                  ? "current"
                  : checkboxDone
                  ? "done"
                  : "other"
              }
            />
            Checkbox
          </li>
          <li>
            <Index
              name="4"
              styling={page === "summary" ? "current" : "other"}
            />
            Summary
          </li>
        </ol>
        <hr />
        {page === "signup" ? (
          <Signup />
        ) : page === "message" ? (
          <Message />
        ) : page === "checkbox" ? (
          <Checkbox />
        ) : page === "summary" ? (
          <Summary />
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
  checkboxDone: state.data.user.checkboxDone,
});

export default connect(mapStateToProps)(Form);
