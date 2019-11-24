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
export const createStore = (formData) => {
  return $.ajax({
    method: "POST",
    url: `api/stores`,
    data: formData,
    contentType: false,
    processData: false
  });
}
export const updateStore = (formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/stores/${formData.get('store[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  });
}
export const deleteStore = (storeId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/stores/${storeId}`
  });
}