json.extract! review, 
  :id, 
  :author_id,
  :product_id,
  :rating,
  :body

json.userName review.author.username

if review.author.profile_image.attached? 
    json.authorImgUrl url_for(review.author.profile_image)
else
    json.authorImgUrl nil
end
