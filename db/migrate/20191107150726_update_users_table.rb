class UpdateUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :gender, :string, :default =>  'other'
    add_column :users, :about, :text, :default =>  ''
  end
end
