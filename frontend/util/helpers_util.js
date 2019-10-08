export const getCurrentUser = (state) => {
  return state.session.currentUser;
};


//CURRENT USER
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

//STORE
export const getStoreCategories = (store) => {
  if (!store || store === undefined) return [];
  return store.categories;
};
export const getStoreProducts = (store) => {
  if (!store || store === undefined) return [];
  return store.categories;
};


