class AddUserIdColumnToContact < ActiveRecord::Migration
  def change
    add_column :contacts, :user_id, :string
  end
end
