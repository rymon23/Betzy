class RenameReviewColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :stars, :rating
    change_column :reviews, :body, :text, :default =>  "", null: false
  end
end
