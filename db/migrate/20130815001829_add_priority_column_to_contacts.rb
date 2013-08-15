class AddPriorityColumnToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :priority, :integer
  end
end
