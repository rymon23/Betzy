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
#

class Product < ApplicationRecord
  validates :name, :description, :price, :store_id, :category_id, presence: true
  
  belongs_to :store,
    class_name: :Store,
    primary_key: :store_id

  # belongs_to :category,
    # class_name: :Category,
    # primary_key: :category_id

  # has_many :reviews,
end 