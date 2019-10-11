
//CURRENT USER
export const getCurrentUser = (state) => {
  return state.session.currentUser;
};
export const getCurrentUserId = (currentUser) => {
  if (!currentUser) return false;
  return currentUser.id;
};
export const hasStore= (currentUser) => {
  if (!currentUser || currentUser === undefined) return false;
  return Boolean(currentUser.store);
};
export const getStore = (currentUser) => {
  if (!currentUser || currentUser === undefined) return null;
  return currentUser.store;
};
//USER
export const getStoreId = (user) => {
  if (!user || user === undefined) return false;
  return user.storeId;
};

//CATEGORY
export const categoryHasProducts = (category) => {
  if (!category) return false;
  return category.productIds.length === 0;
};

export const arrayShuffle = (array) => {
  debugger
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


