json.extract! store, 
  :id, 
  :title,
  :owner_id

json.productIds store.product_ids
json.ownerName store.owner.username
json.ownerEmail store.owner.email
  if store.store_logo.attached?
      json.imageUrl url_for(store.store_logo)
  end
  if store.owner.profile_image.attached?
      json.ownerImgUrl url_for(store.owner.profile_image)
  end
