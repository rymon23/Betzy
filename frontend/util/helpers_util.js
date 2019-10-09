
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

export const arrayShuffle = (array) => {
  const shuffledArray = array.slice();
  for(let i = shuffledArray.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    shuffledArray[i] = array[j]
    shuffledArray[j] = temp
  }
  return shuffledArray 
}



//STORE
// export const getStoreCategories = (store) => {
//   if (!store || store === undefined) return [];
//   return store.categories;
// };
// export const getStoreProducts = (store) => {
//   if (!store || store === undefined) return [];
//   return store.categories;
// };


