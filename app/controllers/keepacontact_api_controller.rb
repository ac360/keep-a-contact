class KeepacontactApiController < ApplicationController

	def get_groups
		@groups = current_user.groups.order(:name)
		render :json => @groups
	end

	def create_group
		@new_group = Group.create(
				:name => params[:name],
				:list_order => params[:list_order],
				:user_id => current_user.id
			)
		render :json => @new_group
	end

	def update_group
		@group = Group.find(params[:id])
		@group.update_attributes( :name => params[:name] || @group.name )
		render :json => @group
	end

	def destroy_group
		@group_id = params[:id].to_s
		@group = Group.where( :id => @group_id, :user_id => current_user.id).destroy_all
		render :json => "Group Successfully Destroyed"
	end

	def get_contacts
		@contacts = Contact.where(:user_id => current_user.id)
		render :json => @contacts
	end

	def get_groups_contacts
		@group_id = params[:group_id]
		if @group_id.to_i > 0
			@contacts = Contact.where( :group_id => @group_id, :user_id => current_user.id ).order(:full_name)
			render :json => @contacts
		else
			@contacts = Contact.where( :user_id => current_user.id )
			render :json => @contacts
		end
	end

	def create_contact
		@new_contact = Contact.create(
									  :user_id => current_user.id,
									  :full_name => params[:full_name], 
									  :first_name => params[:first_name], 
									  :last_name => params[:last_name], 
									  :email => params[:email], 
									  :birthday => params[:birthday],
									  :gender => params[:gender],
									  :birthday => params[:birthday],
									  :location => params[:location],
									  :source => params[:source],
									  :source_uid => params[:source_uid],
									  :facebook_url => params[:facebook_url],
									  :group_name => params[:group_name], 
									  :group_id => params[:group_id],
									  :image_url => params[:image_url],
									  :priority => 3
										  )
		render :json => @new_contact
	end

	def update_contact
		@contact = Contact.find(params[:id])
		@contact.update_attributes(
									  :nick_name => params[:nick_name] 				|| @contact.nick_name,
									  :full_name => params[:full_name] 				|| @contact.full_name, 
									  :first_name => params[:first_name] 			|| @contact.first_name, 
									  :last_name => params[:last_name] 				|| @contact.last_name, 
									  :email => params[:email] 						|| @contact.email, 
									  :birthday => params[:birthday] 				|| @contact.birthday,
									  :gender => params[:gender] 					|| @contact.gender,
									  :location => params[:location] 				|| @contact.location,
									  :source => params[:source] 					|| @contact.source,
									  :source_uid => params[:source_uid] 			|| @contact.source_uid,
									  :facebook_url => params[:facebook_url] 		|| @contact.facebook_url,
									  :group_name => params[:group_name] 			|| @contact.group_name, 
									  :group_id => params[:group_id] 				|| @contact.group_id,
									  :image_url => params[:image_url] 				|| @contact.image_url,
									  :priority => params[:priority] 				|| @contact.priority
										  )
		render :json => @contact
	end


end

