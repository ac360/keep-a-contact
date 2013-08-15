class AddImageUrlColumnToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :image_url, :string
  end
end
