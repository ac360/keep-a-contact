class AddMoreColumnsToContacts < ActiveRecord::Migration
  def change
  	add_column :contacts, :birthday, :string
  end
end
