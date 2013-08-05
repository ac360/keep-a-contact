class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def check_facebook_contacts
  	@user_status = UserStatus.find_by_user_id(current_user.id)

  	if @user_status.connected_facebook == true
  	elsif @user_status.connected_facebook == false
  		redirect_to ('/facebook_contacts')
  	end

  end

end
