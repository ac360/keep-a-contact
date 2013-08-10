class AddFacebookLinkCOlumnToContacts < ActiveRecord::Migration
  def change
  	add_column :contacts, :facebook_url, :string
  end
end
