
//CURRENT USER
export const getCurrentUser = (state) => {
  return state.session.currentUser;
};
export const hasShop = (currentUser) => {
  if (!currentUser || currentUser === undefined) return false;
  return Boolean(currentUser.store);
};
export const getStoreId = (currentUser) => {
  if (!currentUser || currentUser === undefined) return false;
  return currentUser.store.id;
};
export const getStore = (currentUser) => {
  if (!currentUser || currentUser === undefined) return null;
  return currentUser.store;
};

//CATEGORY
export const categoryHasProducts = (category) => {
  if (!category) return false;
  return category.productIds.length === 0;
};

//STORE
// export const getStoreCategories = (store) => {
//   if (!store || store === undefined) return [];
//   return store.categories;
// };
// export const getStoreProducts = (store) => {
//   if (!store || store === undefined) return [];
//   return store.categories;
// };


