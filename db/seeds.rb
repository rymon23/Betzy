# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Category.delete_all
Store.delete_all
Product.destroy_all

CATEGORIES = [
  "Clothing & Shoes",
  "Gear & Accessories",
  "Entertainment",
  "Tools & Craft Supplies",
  "Art",
  "Other"
].freeze

CATEGORIES.each_with_index do |category, ix|
  Category.create!(name: CATEGORIES[ix])
end
categories = Category.all

img_path = './app/assets/images/seeds/'

user1=User.create!(username: 'Demo',password: 'password',email:"demo@gmail.com")
user2=User.create!(username: 'Bobdob',password: 'password',email:"bd@gmail.com")
user3=User.create!(username: 'Debrah',password: 'password',email:"deb@gmail.com")
user4=User.create!(username: 'Samantha',password: 'password',email:"sam@gmail.com")
user5=User.create!(username: 'AmusedObzerver',password: 'password',email:"ao@gmail.com")


store1 = Store.create!(title: "Demo Store", owner_id: user1.id)
store2 = Store.create!(title: "#{user2}'s Store", owner_id: user2.id)
store2 = Store.create!(title: "#{user3}'s Store", owner_id: user3.id)

stores = Store.all

PRODUCT_SEED_IMG = [
  "seed_01.jpg",
  "seed_02.jpg",
  "seed_03.jpg",
  "seed_04.jpg",
  "seed_05.jpg",
  "seed_06.jpg",
  "seed_07.jpg",
  "seed_08.jpg",
  "seed_09.jpg",
  "seed_10.jpg",
  "seed_11.jpg",
  "seed_12.jpeg",
  "seed_13.jpeg",
  "seed_14.jpg",
  "seed_15.png",
  "seed_16.png"
].freeze

img_path = './app/assets/images/seeds/'
file = File.open(img_path + "seed_01.jpg")
user1.profile_image.attach(io: file, filename: "seed_01.jpg")


PRODUCT_PRICES = [
  9.99,
  99.9,
  999.9,
  0.99,
  50.99,
  25.99,
  12.99,
  14.99
].freeze

PRODUCT_SEED_COUNT = PRODUCT_SEED_IMG.count - 1

(0...PRODUCT_SEED_COUNT).each do |i|
  p = Product.create!(
    name: "Product #{i}",
    description: "product description",
    price: PRODUCT_PRICES.sample,
    category_id: categories.sample.id,
    store_id: stores.sample.id)

  product_img = PRODUCT_SEED_IMG[i]
  # debugger
  # p.images.attach(io: File.open(img_path + product_img), filename: product_img)
end