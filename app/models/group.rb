class Group < ActiveRecord::Base
  attr_accessible :list_order, :name, :user_id

  belongs_to :user
  has_many :contacts, dependent: :destroy
  
end
