class AddSourceColumnsToContacts < ActiveRecord::Migration
  def change
  	add_column :contacts, :source, :string
  	add_column :contacts, :source_uid, :string
  end
end
