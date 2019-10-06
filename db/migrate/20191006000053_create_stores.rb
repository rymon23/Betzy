class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :stores, :owner_id
  end
end
