//CURRENT USER
export const selectCurrentUser = (users, sessionId) => {
  return users[sessionId];
};
export const selectCurrentUserStore = (stores, storeId) => {
  return stores[storeId];
};
export const currentUserHasStore = (sessionId, allUsers) => {
  const user = allUsers[sessionId];
  const storeId = user.store_id;
  return storeId;
};


//JOINS SELECT
export const selectProductsByCategory = (allProducts, categoryId) => {
  const selectedProducts = [];
  Object.keys(allProducts).forEach(id => {
    if (allProducts[id].categoryId == categoryId) {
      selectedProducts.push(allProducts[id]);
    }
  });
  return selectedProducts;
};
export const selectProductsByStore = (allProducts, storeId) => {
  const selectedProducts = [];
  Object.keys(allProducts).forEach(id => {
    if (allProducts[id].store_id == storeId) {
      selectedProducts.push(allProducts[id]);
    }
  });
  return selectedProducts;
};

//SELECT ALL *
export const selectAllStores = allStores => {
    return Object.keys(allStores)
        .map(id => allStores[id]);
}
export const selectAllUsers = (allUsers) => {
    return Object.keys(allUsers)
        .map(id => allUsers[id]);
}
export const selectAllProducts = allProducts => {
    return Object.keys(allProducts)
        .map(id => allProducts[id]);
};
export const selectAllReviews = allReviews => {
    return Object.keys(allReviews)
        .map(id => allReviews[id]);
};


