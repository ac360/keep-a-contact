KeepAContact::Application.routes.draw do

  authenticated :user do
  	  # Dashboard Pages
  	  match 'facebook_contacts', :to => 'dashboard#facebook_contacts'
  	  match 'dashboard', :to => 'dashboard#main'
  	  # API Calls
  	  match 'get_friends', :to => 'facebook_api#get_friends'
  	  # Root
	  root :to => redirect("/dashboard")
  end

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root :to => 'main#index'
  
end
