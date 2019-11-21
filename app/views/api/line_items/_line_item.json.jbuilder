json.extract! line_item, 
  :id, 
  :product_id,
  :user_id,
  :quantity

json.name = line_item.product.name
json.store_id = line_item.product.store_id
json.category_id = line_item.product.category_id