# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  product_id :integer          not null
#  stars      :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  # validates :stars, presence: true
  # validates :stars, numericality: { greater_than_or_equal_to: 0, less_than: 6 }

  # belongs_to :product,
  #   class_name: :Product,
  #   foreign_key: :product_id  

  # belongs_to :author,
  #   class_name: :User,
  #   foreign_key: :author_id
end
