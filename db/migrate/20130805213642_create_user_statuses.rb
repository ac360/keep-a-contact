class CreateUserStatuses < ActiveRecord::Migration
  def change
    create_table :user_statuses do |t|
      t.boolean :connected_facebook
      t.timestamps
    end
  end
end
