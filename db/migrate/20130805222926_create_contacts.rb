class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :full_name
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :location
      t.integer :group_id

      t.timestamps
    end
  end
end
