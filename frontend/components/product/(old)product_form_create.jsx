import React from "react";
import { connect } from "react-redux";
import { createProduct } from "../../actions/product_actions";
import ProductForm from "./(old)product_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "new",
    formTitle: "Create your new product",
    buttonType: "Create Product",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
