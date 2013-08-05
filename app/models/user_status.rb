class UserStatus < ActiveRecord::Base
  attr_accessible :connected_facebook, :user_id

  belongs_to :user
end
