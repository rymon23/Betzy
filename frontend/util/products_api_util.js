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

export const createProduct = (product) => {
  return $.ajax({
    method: "POST",
    url: `api/products`,
    data: { product }
  });
}

export const updateProduct = (product) => {
  return $.ajax({
    method: "PATCH",
    url: `api/products/${product.id}`
  });
}

export const deleteProduct = (productId) => {
  return $.ajax({
    method: "Delete",
    url: `api/products/${productId}`
  });
}

