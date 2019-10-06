# == Schema Information
#
# Table name: stores
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Store < ApplicationRecord
  validates :title, :owner_id, presence: true

  belongs_to :owner,
  class_name: :User,
  foreign_key: :owner_id

  has_many :products
end 
