class Contact < ActiveRecord::Base
  
  # Make all attributes accessible
  attr_protected

  belongs_to :group
  belongs_to :contact

end
