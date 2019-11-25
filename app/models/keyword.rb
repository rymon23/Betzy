# == Schema Information
#
# Table name: keywords
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Keyword < ApplicationRecord
  validates :name, presence: true, uniqueness: true, length: { minimum:3 }

  has_many :product_keywords,
    class_name: :ProductKeyword,
    foreign_key: :keyword_id

  has_many :products,
    through: :product_keywords,
    source: :product
end 
