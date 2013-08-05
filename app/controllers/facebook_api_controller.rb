class FacebookApiController < ApplicationController

	def get_contacts
		@friends = current_user.facebook.get_connections("me", "friends")
		render :json => @friends
	end

end

