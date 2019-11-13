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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
