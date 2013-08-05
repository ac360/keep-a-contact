class DashboardController < ApplicationController

	before_filter :check_facebook_contacts, :only => [:main]

	def main
		
	end

	def facebook_contacts

	end

end

