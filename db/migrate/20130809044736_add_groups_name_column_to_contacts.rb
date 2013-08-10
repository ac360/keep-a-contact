class AddGroupsNameColumnToContacts < ActiveRecord::Migration
  def change
  	add_column :contacts, :group_name, :string
  end
end
