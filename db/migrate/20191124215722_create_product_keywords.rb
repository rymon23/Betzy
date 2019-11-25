class CreateProductKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :product_keywords do |t|
      t.integer :keyword_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :product_keywords, :keyword_id
    add_index :product_keywords, :product_id
  end
end
