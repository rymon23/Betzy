
json.extract! product_keyword, 
  :id, 
  :product_id,
  :keyword_id,

json.name = product_keyword.keyword.name
json.productName = product_keyword.product.name