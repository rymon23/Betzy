class UpdateStoreIndexing < ActiveRecord::Migration[5.2]
  def change
    add_index :stores, :name, unique: true
  end
end
