class KeepacontactApiController < ApplicationController

	def get_groups
		@groups= current_user.groups.sort_by{|g| g.list_order}
		render :json => @groups
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
		render :json => @new_contact
	end

end

