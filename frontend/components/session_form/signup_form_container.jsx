import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup , login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { enableModal, disableModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    formTitle: "Create your account",
    buttonType: "Register",
    // navLink: <Link to='/login'>Sign in</Link> 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    enableModal: (<button onClick={() => dispatch(enableModal("login"))}>Sign in</button>),
    disableModal: () => dispatch(disableModal()),
    demoLogin: () => dispatch(login({ user: { username: "username", 
        password: "password", 
        email: "demo@gmail.com" } }).then(disableModal()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
