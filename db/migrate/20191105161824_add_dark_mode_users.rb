class AddDarkModeUsers < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :dark_node, :boolean, :default => false
  end
end
