class Group < ActiveRecord::Base
  attr_accessible :list_order, :name, :user_id

  belongs_to :user
  
end
