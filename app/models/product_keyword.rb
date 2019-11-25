# == Schema Information
#
# Table name: product_keywords
#
#  id         :bigint(8)        not null, primary key
#  keyword_id :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProductKeyword < ApplicationRecord
  validates :keyword_id, :product_id, presence: true

  belongs_to :keyword,
    class_name: :Keyword,
    foreign_key: :keyword_id

  belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id
end 
