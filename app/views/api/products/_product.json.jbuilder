json.extract! product, 
  :id, 
  :name, 
  :description,
  :price, 
  :quantity,
  :store_id,
  :category_id

json.inStock = product.quantity >= 1

if product.images.attached?
    json.imageUrls product.images.map { |file| url_for(file) }
end    

if product.reviews.count > 0
  reviewIds = []
  ratingSum = 0
  
  product.reviews.each do |review|
    reviewIds << review.id
    ratingSum += review.stars
  end

  json.reviewIds reviewIds
  json.ratingAvg = (ratingSum * 1.0) / reviews.count
else 
  
  json.reviewIds []
  json.ratingAvg = 0.0
end