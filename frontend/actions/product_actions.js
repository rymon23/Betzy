import * as APIUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

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
const removeProduct = () => {
  return {
    type: REMOVE_PRODUCT,
  }
};

export const fetchProducts = () => dispatch => {
  return APIUtil.fetchProducts()
    .then((products) => dispatch(receiveAllProducts(products)))
};
export const fetchProduct = (id) => dispatch => {
  return APIUtil.fetchProduct(id)
    .then((product) => dispatch(receiveProduct(product)))
};
export const createProduct = (product) => dispatch => {
  return APIUtil.createProduct(product)
    .then((product) => dispatch(receiveProduct(product)))
};
export const updateProduct = (product) => dispatch => {
  return APIUtil.updateProduct(product)
    .then((product) => dispatch(receiveProduct(product)))
};
export const deleteProduct = (productId) => dispatch => {
  return APIUtil.deleteProduct(productId)
    .then((product) => dispatch(removeProduct()))
};
