import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Create your account",
    buttonType: "Register",
    navLink: <Link to='/login'>Sign in</Link> 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action: (user)=> dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);