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

User.delete_all
user1=User.create!(username: 'Demo User',password: 'password',email:"demo@gmail.com")
user2=User.create!(username: 'bobdob',password: 'password',email:"bd@gmail.com")

# Product.delete_all
# Store.delete_all