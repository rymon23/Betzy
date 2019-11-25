@keywords.each do |keyword|
   json.set! keyword.id do
     json.partial! "keyword", keyword: keyword    
   end
end