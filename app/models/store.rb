# == Schema Information
#
# Table name: stores
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Store < ApplicationRecord
  validates :name, uniqueness: true, length: { minimum: 2 }
  validates :owner_id, presence: true

  has_one_attached :store_logo

  belongs_to :owner,
    class_name: :User,
    foreign_key: :owner_id

  has_many :products,
    class_name: :Product,
    foreign_key: :store_id

  has_many :categories,
    through: :products,
    source: :category
end 
