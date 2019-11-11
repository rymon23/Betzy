# == Schema Information
#
# Table name: line_items
#
#  id         :bigint(8)        not null, primary key
#  quantity   :integer          default(1)
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LineItem < ApplicationRecord
  validates :quantity, numericality: { greater_than: 0 }, presence: true
  validates :user_id, :product_id, presence: true

  belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id
end 
