class CreateKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :keywords do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :keywords, :name, unique: true
  end
end
