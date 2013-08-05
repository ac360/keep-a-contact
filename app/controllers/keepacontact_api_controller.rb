class KeepacontactApiController < ApplicationController

	def get_groups
		@groups= current_user.groups.sort_by{|g| g.list_order}
		render :json => @groups
	end

end

