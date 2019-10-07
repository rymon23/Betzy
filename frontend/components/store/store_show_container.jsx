import React from "react";
import { connect } from "react-redux";
import { fetchStore } from "../../actions/store_actions";
import { fetchProducts, deleteProduct } from "../../actions/product_actions";

import StoreShow from "./store_show";

const mapStateToProps = (state, ownProps) => {
  debugger
  // const currentUserId = state.session.currentUser.id;
  const storeId = ownProps.match.params.storeId;
  const store = state.entities.stores[storeId];

  return {
    // currentUserId,
    store,
    products: [], //temporary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStore: (id) => dispatch(fetchStore(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: (productId) => dispatch(deleteProduct(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreShow);
