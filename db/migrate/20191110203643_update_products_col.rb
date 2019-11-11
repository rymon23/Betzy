class UpdateProductsCol < ActiveRecord::Migration[5.2]
  def change
      add_column :products, :quantity, :integer, :default =>  1, null: false
      rename_column :stores, :title, :name
  end
end
