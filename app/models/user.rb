class User < ActiveRecord::Base
	  
	  # Include default devise modules. Others available are:
	  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
	  devise :database_authenticatable, :registerable,
	         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]

	  # Setup accessible (or protected) attributes for your model
	  attr_accessible :email, :password, :password_confirmation, :remember_me, :provider, :uid, :name, :oauth_token, :first_name, :image, :location, :link, :gender, :timezone

	  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
		  user = User.where(:provider => auth.provider, :uid => auth.uid).first

		  if user # if user exists, then update all of the information
		    	user = user.update_attributes(
		  							:name => auth.extra.raw_info.name,
		                         	:provider => auth.provider,
		                         	:uid => auth.uid,
		                         	:email => auth.info.email,
		                         	:password => Devise.friendly_token[0,20],
		                         	:oauth_token => auth.credentials.token,
		                         	:first_name => auth.info.first_name,
		                         	:image => auth.info.image,
		                         	:location => auth.info.location,
		                         	:link => auth.extra.raw_info.link,
		                         	:gender => auth.extra.raw_info.gender,
		                         	:timezone => auth.extra.raw_info.timezone
		                           )
		    	user = User.where(:provider => auth.provider, :uid => auth.uid).first
		  else # if user does not exist, create one
		  		user = User.create(name:auth.extra.raw_info.name,
		                         	provider:auth.provider,
		                         	uid:auth.uid,
		                         	email:auth.info.email,
		                         	password:Devise.friendly_token[0,20],
		                         	oauth_token:auth.credentials.token,
		                         	first_name:auth.info.first_name,
		                         	image:auth.info.image,
		                         	location:auth.info.location,
		                         	link:auth.extra.raw_info.link,
		                         	gender:auth.extra.raw_info.gender,
		                         	timezone:auth.extra.raw_info.timezone
		                           )
		  end
		  user
	  end # end find_for_facebook_oauth
  
end
