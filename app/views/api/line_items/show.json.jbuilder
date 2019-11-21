
#json.partial! "line_item", line_item: @line_item    
#   json.set! @line_item.product_id do
#     json.partial! "line_item", line_item: @line_item    
#   end

    json.partial! "line_item", line_item: @line_item    
