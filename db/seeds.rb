# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
require 'open-uri'

Faker::UniqueGenerator.clear # Clears used values for all generators

User.destroy_all
Category.delete_all
Store.delete_all
Product.destroy_all
Review.destroy_all
LineItem.destroy_all

PLACEHOLDER_PICS = {
  user: "ph_profile_pic.jpg",
  shop: "ph_store_logo.png",
  product: "ph_1.png"
}.freeze

ART_PICS = [
  "rm_art_1.jpg",
  "rm_art_2.jpg",
  "rm_art_3.jpg",
  "rm_art_4.jpg",
  "rm_art_5.JPG",
  "rm_art_6.JPG",
  "rm_art_7.JPG",
  "rm_art_8.JPG",
  "rm_art_9.JPG",
  "rm_art_10.JPG",
  "rm_art_11.JPG",
  "rm_art_12.JPG",
  "rm_art_13.JPG",
  "rm_art_14.JPG",
  "rm_art_15.JPG"
].freeze

PRODUCT_SEED_IMG = [
  "seed_1.jpg",
  "seed_2.jpg",
  "seed_3.jpg",
  "seed_4.jpg",
  "seed_5.jpg",
  "seed_6.jpg",
  "seed_7.jpg",
  "seed_8.jpg",
  "seed_9.jpg",
  "seed_10.jpg",
  "seed_11.jpg",
  "seed_12.jpg",
  "seed_13.jpg",
  "seed_14.jpg",
  "seed_15.jpg",
  "seed_16.jpg",
  "seed_17.jpg",
  "seed_18.jpg",
  "seed_19.jpg",
  "seed_20.jpg",
  "seed_21.jpg",
  "seed_22.jpg",
  "seed_23.jpg",
  "seed_24.jpg",
  "seed_25.jpg",
  "seed_26.jpg",
  "seed_27.jpg",
  "seed_28.jpg",
  "seed_29.jpg",
  "seed_30.jpg",
  "seed_31.png",
  "seed_32.jpg",
  "seed_33.jpg",
  "seed_34.jpg",
  "seed_35.png",
  "seed_36.jpg",
  "seed_37.jpg"
].freeze

PROFILE_PICS = [
  "profile_pic_1.jpg",
  "profile_pic_2.jpg",
  "profile_pic_3.jpg",
  "profile_pic_4.jpg",
  "profile_pic_5.jpg",
  "profile_pic_6.jpg",
  "profile_pic_7.jpg",
  "profile_pic_8.jpg",
  "profile_pic_9.jpg",
  "profile_pic_10.jpg"
].freeze

STORE_LOGOS = [
  "store_1.jpg",
  "store_2.jpg",
  "store_3.jpg",
  "store_4.jpg",
  "store_5.jpg",
  "store_6.jpg"
].freeze

BANNER_PICS = [
  "banner_1.jpg",
  "banner_2.jpg",
  "banner_3.jpg"
].freeze


PRODUCT_PRICES = [
  9.99,
  99.99,
  999.99,
  4.99,
  50.99,
  25.99,
  12.99,
  14.99,
  5.99,
  8.99,
  5.99,
  7.99,
  600.99,
].freeze

CATEGORY_ART_TITLE = "Art & Collectibles"

CATEGORIES = [
  "Clothing & Shoes",
  "Gear & Accessories",
  "Toys & Entertainment",
  "Tools & Craft Supplies",
  CATEGORY_ART_TITLE,
  "Vintage"
].freeze

CATEGORIES.each_with_index do |category, ix|
  Category.create!(name: CATEGORIES[ix])
end
categories = Category.all
category_art = nil
categories.each {|category| category_art = category if category.name == CATEGORY_ART_TITLE}
categories = categories.select {|category| category.name != CATEGORY_ART_TITLE}

# img_path = './app/assets/images/seeds/'


def random_dark_mode
  rand(0..1) == 1
end

def setup_user_profile_pic(user)
  pic = PROFILE_PICS.sample
  img_path = Rails.root.join('app', 'assets', 'images', 'seeds', 'user', pic)
  file = File.open(img_path)
  user.profile_image.attach(io: file, filename: pic)
end

def setup_store_logo(store)
  pic = STORE_LOGOS.sample
  img_path = Rails.root.join('app', 'assets', 'images', 'seeds', 'store', pic)
  file = File.open(img_path)
  store.store_logo.attach(io: file, filename: pic)
end

def generate_users(amount = 23)
  (0...amount).each do |n|

    User.create!(
      username: Faker::Internet.unique.username(specifier: 6..12),
      password: 'password',
      email: Faker::Internet.unique.email,
      dark_mode: random_dark_mode(),
      about: Faker::Hipster.sentence
      )
  end
end

user1=User.create!(username: 'Demo User',password: 'password',email:"demo@gmail.com")
user2=User.create!(username: 'Bobdob',password: 'password',email:"bd@gmail.com")
user3=User.create!(username: 'Debrah',password: 'password',email:"deb@gmail.com")
user4=User.create!(username: Faker::Name.unique.name, password: 'password',email: Faker::Internet.unique.email)
user5=User.create!(username: Faker::Name.unique.name, password: 'password',email: Faker::Internet.unique.email)

setup_user_profile_pic(user1)
setup_user_profile_pic(user2)
setup_user_profile_pic(user3)
setup_user_profile_pic(user4)
setup_user_profile_pic(user5)


store1 = Store.create!(name: "Demo Store", owner_id: user1.id)
store2 = Store.create!(name: "#{user2.username}'s Store", owner_id: user2.id)
store3 = Store.create!(name: "#{user3.username}'s Store", owner_id: user3.id)

setup_store_logo(store1)
setup_store_logo(store2)
setup_store_logo(store3)

stores = Store.all

generate_users(23)

(0...PRODUCT_SEED_IMG.count).each do |i|
  p = Product.create!(
    name: Faker::Commerce.product_name, #"Product #{i}",
    description: Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 7),
    price: PRODUCT_PRICES.sample,
    quantity: rand(3..250),
    category_id: categories.sample.id,
    store_id: stores.sample.id)

  product_img = PRODUCT_SEED_IMG[i]

  img_path = Rails.root.join('app', 'assets', 'images', 'seeds', PRODUCT_SEED_IMG[i])
  file = File.open(img_path)
  p.images.attach(io: file, filename: PRODUCT_SEED_IMG[i])
end

(0...ART_PICS.count).each do |i|
  name = "Art Product #{i}"
  p = Product.create!(
    name: name,
    description: Faker::Lorem.sentence(word_count: 3, supplemental: false, random_words_to_add: 7),
    price: 999.99,
    quantity: rand(1..3),
    category_id: category_art.id,
    store_id: store1.id
    )

  product_img = ART_PICS[i]
  img_path = Rails.root.join('app', 'assets', 'images', 'seeds', 'art', ART_PICS[i])
  file = File.open(img_path)
  p.images.attach(io: file, filename: ART_PICS[i])
end

line_item1 = LineItem.create!(
  quantity: 1,
  user_id: user1.id,
  product_id: store2.products.sample.id
)