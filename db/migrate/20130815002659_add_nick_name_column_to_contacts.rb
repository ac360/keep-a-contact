class AddNickNameColumnToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :nick_name, :string
  end
end
