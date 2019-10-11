import { arrayShuffle, sample } from "../util/helpers_util";

//CURRENT USER
export const selectCurrentUser = (users, sessionId) => {
  return users[sessionId];
};
export const selectCurrentUserStore = (stores, storeId) => {
  return stores[storeId];
};
export const currentUserHasStore = (currentUser) => {
  if (!currentUser) return false;
  return currentUser.store_id;
};
// export const currentUserHasStore = (sessionId, allUsers) => {
//   const user = allUsers[sessionId];
//   const storeId = user.store_id;
//   return storeId;
// };

//JOINS SELECT
export const selectProductsByCategory = (allProducts, categoryId) => {
  const selectedProducts = [];
  Object.keys(allProducts).forEach((id) => {
    if (allProducts[id].category_id == categoryId) {
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

export const sampleProducts = (allProducts, amount = 18) => {
  debugger
  if ( Object.keys(allProducts).length === 0 ) return allProducts;

  debugger
  const result = sample(Object.values(allProducts), amount);
  debugger
  
  // const result = sample.slice(0, amount);
  // const result = {};
  // for (let index = 0; index < sample.length; index++) {
  //   const element = sample[index];
  //   result.id = element
  // }
  return result;
};

// export const selectReviewsByProduct = (allReviews, productId) => {
//   const selectedReviews = [];
//   Object.values(allReviews).forEach((review) => {
//     if (review.product_id == productId) {
//       selectedReviews.push(review);
//     }
//   });
//   return selectedReviews;
// };



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


