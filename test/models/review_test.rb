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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
