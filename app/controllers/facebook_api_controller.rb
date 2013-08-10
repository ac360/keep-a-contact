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

	def create_contact
		@new_contact = Contact.create(:full_name => params[:name], 
									  :first_name => params[:first_name], 
									  :last_name => params[:last_name], 
									  :email => params[:email], 
									  :birthday => params[:birthday],
									  :gender => params[:gender],
									  :birthday => params[:birthday],
									  :location => params[:location],
									  :source => params[:source],
									  :source_uid => params[:source_uid],
									  :facebook_url => params[:facebook_url]
									   )
	end

end

