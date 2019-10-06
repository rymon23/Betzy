class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.integer :store_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :products, :store_id
    add_index :products, :category_id
  end
end
