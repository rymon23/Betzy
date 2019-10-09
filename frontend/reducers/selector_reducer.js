import { runInNewContext } from "vm";

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
  Object.values(allProducts).forEach((product) => {
    if (product.category_id == categoryId) {
      selectedProducts.push(product);
      console.log(selectedProducts);
    }
  });
  return selectedProducts;
};
export const selectProductsByStore = (allProducts, storeId) => {
  const selectedProducts = [];
  Object.values(allProducts).forEach((product) => {
    if (product.store_id == storeId) {
      selectedProducts.push(product);
    }
  });
  return selectedProducts;
};
export const selectCategoriesByProducts = (allCategories, products) => {
  const catagoryIds = [];
  Object.values(products).forEach((product) => {
    if (catagoryIds.includes(product.category_id)) return;
    catagoryIds.push(product.category_id);
  }) 
  const selectedCategories = 
    Object.values(allCategories).filter(category => catagoryIds.includes(category.id)) || [];
  return selectedCategories;
};
export const selectReviewsByProduct = (allReviews, productId) => {
  const selectedReviews = [];
  Object.values(allReviews).forEach((review) => {
    if (review.product_id == productId) {
      selectedReviews.push(review);
    }
  });
  return selectedReviews;
};


//SELECT ALL *
export const selectAllStores = (allStores) => {
    return Object.keys(allStores)
        .map(id => allStores[id]);
}
export const selectAllUsers = (allUsers) => {
    return Object.keys(allUsers)
        .map(id => allUsers[id]);
}
export const selectAllProducts = (allProducts) => {
    return Object.keys(allProducts)
        .map(id => allProducts[id]);
};
export const selectAllCategories = (allCategories) => {
    return Object.keys(allCategories)
        .map(id => allCategories[id]);
};
export const selectAllReviews = (allReviews) => {
    return Object.keys(allReviews)
        .map(id => allReviews[id]);
};


