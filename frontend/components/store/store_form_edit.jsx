import React from "react";
import { connect } from "react-redux";
import { updateStore } from "../../actions/store_actions";
import StoreForm from "./store_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "update",
    formTitle: "Update your store",
    buttonType: "Update Store",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (store) => dispatch(updateStore(store)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreForm);