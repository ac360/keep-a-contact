class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :list_order
      t.integer :user_id

      t.timestamps
    end
  end
end
