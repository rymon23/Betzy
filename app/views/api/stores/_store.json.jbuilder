json.extract! store, 
  :id, 
  :title,
  :owner_id

  if store.store_logo.attached?
      json.imageUrl url_for(store.store_logo)
  end
json.productIds store.product_ids
json.ownerName store.owner.username
json.ownerEmail store.owner.email