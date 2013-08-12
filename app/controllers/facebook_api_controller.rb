class FacebookApiController < ApplicationController

	def get_contacts
		@friends = current_user.facebook.get_connections("me", "friends")
		render :json => @friends
	end

	def get_single_contact
		@user_id = params[:user_id]
		@user_info = current_user.facebook.get_object(@user_id)
		render :json => @user_info
	end

end

