class Contact < ActiveRecord::Base
  attr_accessible :email, :first_name, :full_name, :last_name, :location

  belongs_to :group

end
