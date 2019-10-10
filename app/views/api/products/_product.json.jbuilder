json.extract! product, 
  :id, 
  :name, 
  :description, 
  :price, 
  :store_id,
  :category_id

if product.images.attached?
    json.imageUrls product.images.map { |file| url_for(file) }
end    