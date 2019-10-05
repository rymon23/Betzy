import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { enableModal, disableModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    formTitle: "Sign in to continue",
    buttonType: "Sign in",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    enableModal: (<button onClick={() => dispatch(enableModal("signup"))}>Sign up</button>),
    disableModal: () => dispatch(disableModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);