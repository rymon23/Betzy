json.extract! review, :id, :user_id, :integer, :product_id, :stars, :body, :created_at, :updated_at
json.url review_url(review, format: :json)
