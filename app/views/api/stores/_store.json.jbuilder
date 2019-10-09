json.extract! store, 
  :id, 
  :title,
  :owner_id

json.productIds store.product_ids
json.ownerName store.owner.username