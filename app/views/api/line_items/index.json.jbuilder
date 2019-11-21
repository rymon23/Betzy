
if @line_items
  @line_items.each do |line_item|
    json.set! line_item.product_id do
      json.partial! "line_item", line_item: line_item    
    end
  end
end