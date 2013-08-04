KeepAContact::Application.routes.draw do

  authenticated :user do
	  root :to => "dashboard#main"
  end

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  match 'get_friends', :to => 'facebook_api#get_friends'
  root :to => 'main#index'
  
end
