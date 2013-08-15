KeepAContact::Application.routes.draw do

  authenticated :user do

  	  # Dashboard Pages
  	  match 'facebook_contacts', :to => 'dashboard#facebook_contacts'
  	  match 'dashboard', :to => 'dashboard#main'
  	  # API Calls
  	  match 'facebook/get_contacts', :to => 'facebook_api#get_contacts'
      match 'facebook/get_contact', :to => 'facebook_api#get_single_contact'
  	  match 'keepacontact/groups', :to => 'keepacontact_api#get_groups'
      match 'keepacontact/contacts', :to => 'keepacontact_api#get_contacts', :via => [:get]
      match 'keepacontact/contacts', :to => 'keepacontact_api#create_contact', :via => [:post]
      match 'keepacontact/contacts/:id', :to => 'keepacontact_api#update_contact', :via => [:put]
  	  # Root
	    root :to => redirect("/dashboard")
      
  end

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  root :to => 'main#index'
  
end
