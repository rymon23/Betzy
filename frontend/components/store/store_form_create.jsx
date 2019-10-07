import React from "react";
import { connect } from "react-redux";
import { createStore } from "../../actions/store_actions";
import StoreForm from "./store_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "new",
    formTitle: "Create your store",
    buttonType: "Create Store",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (store) => dispatch(createStore(store)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreForm);
