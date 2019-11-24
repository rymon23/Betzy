import * as APIUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

const receiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  }
};
const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
};
const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    productId
  }
};
const receiveProductErrors = (errors) => {
  return {
    type: RECEIVE_PRODUCT_ERRORS,
    errors
  }
};


export const fetchProducts = (filter) => (dispatch) => {
  return APIUtil.fetchProducts(filter)
    .then((products) => dispatch(receiveAllProducts(products)));
};
export const fetchProduct = (id) => (dispatch) => {
  return APIUtil.fetchProduct(id)
    .then((product) => dispatch(receiveProduct(product)));
};
export const createProduct = (product) => (dispatch) => {
  return APIUtil.createProduct(product)
    .then((product) => dispatch(receiveProduct(product))
    ,(error) => (dispatch(receiveProductErrors(error.responseJSON))));
};
export const updateProduct = (product) => (dispatch) => {
  return APIUtil.updateProduct(product)
    .then((product) => dispatch(receiveProduct(product))
    ,(error) => (dispatch(receiveProductErrors(error.responseJSON))));
};
export const deleteProduct = (productId) => (dispatch) => {
  return APIUtil.deleteProduct(productId)
    .then((product) => dispatch(removeProduct(product.id)));
};
