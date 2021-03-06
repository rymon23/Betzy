
export const objectValuesArray = (obj) => {
  return Object.values(obj) || [];
};


export const calculateCartCost = (products) => {
  let totalCost = 0;
  products.forEach((product) => {
    totalCost += products.price
  });
  return totalCost;
};


export const isDataFetched = (obj) => {  
  if (obj instanceof Array){
    return obj.length > 0;
  };
  if (typeof obj === "object"){
    return Object.keys(obj).length > 0;  
  };
  return Boolean(obj);
};

export const fetchDataIfUnfetched = (dataSets = {}, callback) => {
  const keys = Object.keys(dataSets);
  if (keys.length <= 0) return;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    debugger
    if (key && dataSets[key]) {
      debugger
      const dataKey = this.props[key];
      const fetchAction = dataSets[key];

      debugger
      if (!isDataFetched(dataKey)) promises.push(fetchAction());
    };
  };

  debugger
  const that = this;
  const promises = [];
  Object.keys(dataSets).forEach((key) => {
    const that = this;
    debugger
    if (key && dataSets[key]) {
      debugger
      if (!isDataFetched(that.props.key)) promises.push(that.props.dataSets[key]());
    };
  }, this);
  debugger
  return Promise.all(promises).then((result) => {
    callback(that);
  });
}


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
  debugger
  for(let i = shuffledArray.length - 1; i > 0; i--){
    debugger
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    shuffledArray[i] = array[j]
    shuffledArray[j] = temp
  }
  return shuffledArray 
}

export const sample = (array, amount = 1) => {
  if (amount === 1) return array[Math.floor ( Math.random() * array.length )];
  const sampleArr = [];
  if (amount > array.length - 1) amount = array.length;
  
  while (sampleArr.length < amount) {
    let el = sample(array);
    if (!sampleArr.includes(el)) {
      sampleArr.push(el);
    }
  }
  return sampleArr;
}

export const removeDups = (array) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!result.includes(element)){
      result.push(element);
    }
  }
}

export const limitStringDisplay = (string, charsShown = 60) => {
  if (!string || string.length === 0) return '';
  return string.length <= charsShown ? string : string.slice(0, charsShown) + "...";
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


