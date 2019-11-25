@product_keywords.each do |product_keyword|
   json.set! product_keyword.id do
     json.partial! "product_keyword", product_keyword: product_keyword    
   end
end