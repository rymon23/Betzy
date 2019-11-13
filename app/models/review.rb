# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  product_id :integer          not null
#  rating     :integer          not null
#  body       :text             default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :product_id, presence: true
  validates :rating, inclusion: { in: (1..5) }, presence: true
  validates :body, length: { maximum: 200 }, presence: true

  belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id  
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :store
end
