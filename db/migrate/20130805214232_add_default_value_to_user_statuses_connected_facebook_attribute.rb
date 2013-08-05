class AddDefaultValueToUserStatusesConnectedFacebookAttribute < ActiveRecord::Migration
  def change
  	change_column :user_statuses, :connected_facebook, :boolean, :default => false
  end
end
