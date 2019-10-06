export const fetchStores = () => {
  return $.ajax({
    method: "GET",
    url: `api/stores`
  })
}

export const fetchStore = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/stores/${id}`
  });
}

export const createStore = (store) => {
  return $.ajax({
    method: "POST",
    url: `api/stores`,
    data: { store }
  });
}

export const updateStore = (store) => {
  return $.ajax({
    method: "PATCH",
    url: `api/stores/${store.id}`
  });
}