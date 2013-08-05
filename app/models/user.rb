class User < ActiveRecord::Base
	  
	  # Include default devise modules. Others available are:
	  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
	  devise :database_authenticatable, :registerable,
	         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]

	  # Setup accessible (or protected) attributes for your model
	  attr_accessible :email, :password, :password_confirmation, :remember_me, :provider, :uid, :name, :oauth_token, :first_name, :image, :location, :link, :gender, :timezone

	  has_one :user_status, dependent: :destroy
	  has_many :groups, dependent: :destroy

	  after_create :create_associations

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

	  def facebook
		  @facebook ||= Koala::Facebook::API.new(oauth_token)
		  block_given? ? yield(@facebook) : @facebook
		  rescue Koala::Facebook::APIError => e
		  logger.info e.to_s
		  nil # or consider a custom null object
	  end

	  def create_associations
	  	@user_status = UserStatus.new(:user_id => self.id)
  		@user_status.save
  		@group_family = Group.new(:user_id => self.id, :name => 'Family', :list_order => 1)
  		@group_family.save
  		@group_friends = Group.new(:user_id => self.id, :name => 'Friends', :list_order => 2)
  		@group_friends.save
  		@group_coworkers = Group.new(:user_id => self.id, :name => 'Coworkers', :list_order => 3)
  		@group_coworkers.save
  		@group_other = Group.new(:user_id => self.id, :name => 'Other', :list_order => 4)
  		@group_other.save
	  end
  
end
