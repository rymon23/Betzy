# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  price       :decimal(, )      not null
#  store_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  quantity    :integer          default(1), not null
#

class Product < ApplicationRecord
  validates :name, length: { minimum: 6 }, presence: true
  validates :description, length: { minimum: 10 }, presence: true
  validates :price, numericality: { greater_than: 0 }, presence: true
  validates :quantity, :store_id, :category_id, presence: true

  has_many_attached :images

  belongs_to :store,
    class_name: :Store,
    foreign_key: :store_id

  belongs_to :category,
    class_name: :Category,
    foreign_key: :category_id

  has_many :line_items,
    class_name: :LineItem,
    foreign_key: :product_id

  has_many :reviews,
    class_name: :Review,
    foreign_key: :product_id   
end 
