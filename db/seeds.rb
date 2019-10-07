# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CATEGORIES = [
  "Clothing & Shoes",
  "Gear & Accessories",
  "Entertainment",
  "Tools & Craft Supplies",
  "Art",
  "Other"
].freeze

Category.delete_all
CATEGORIES.each_with_index do |category, ix|
  Category.create!(name: CATEGORIES[ix])
end

User.delete_all
user1=User.create!(username: 'Demo User',password: 'password',email:"demo@gmail.com")
user2=User.create!(username: 'bobdob',password: 'password',email:"bd@gmail.com")

Store.delete_all
demo_store = Store.create!(title: "Demo Store", owner_id: user1.id)

categories = Category.all
stores = Store.all

Product.delete_all

(0..8).each do |i|
  Product.create!(
    name: "Test Product #{i}",
    description: "product description",
    price: 99.9,
    category_id: categories.sample.id,
    store_id: stores.sample.id )
end
