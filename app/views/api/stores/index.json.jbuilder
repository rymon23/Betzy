@stores.each do |store|
  json.set! store.id do
    json.partial! "store" store: store    
  end
end