import React from "react";
import { connect } from "react-redux";
import { updateProduct } from "../../actions/product_actions";
import ProductForm from "./(old)product_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "update",
    formTitle: "Edit your product",
    buttonType: "Update",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (product) => dispatch(updateProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
