class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def check_facebook_contacts
  	if Contact.exists?(:user_id => current_user.id, :source => "facebook")
  	else
  		redirect_to ('/facebook_contacts')
  	end
  end
end
