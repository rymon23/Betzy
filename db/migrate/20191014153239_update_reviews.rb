class UpdateReviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :author_id, :user_id
  end
end
