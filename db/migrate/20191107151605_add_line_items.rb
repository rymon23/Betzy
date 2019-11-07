class AddLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :line_items do |t|
      t.integer :quantity, :default => 1
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :line_items, :user_id
    add_index :line_items, :product_id
  end
end
