class AddFurtherColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :image, :string
    add_column :users, :location, :string
    add_column :users, :link, :string
    add_column :users, :gender, :string
    add_column :users, :timezone, :string
  end
end
