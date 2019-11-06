class UpdateDarkModeUsers < ActiveRecord::Migration[5.2]
  def change
      rename_column :users, :dark_node, :dark_mode
  end
end
