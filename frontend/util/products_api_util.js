export const fetchProducts = () => {
  return $.ajax({
    method: "GET",
    url: `api/products`
  })
}
export const fetchProduct = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/products/${id}`
  });
}
export const deleteProduct = (productId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/products/${productId}`
  });
}
export const createProduct = (formData) => {
  return $.ajax({
    method: "POST",
    url: `/api/stores/${formData.get('product[store_id]')}/products`,
    data: formData,
    contentType: false,
    processData: false
  });
}
export const updateProduct = (formData) => {
  return $.ajax({
    method: "PATCH",
    url: `api/products/${formData.get('product[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  });
}



