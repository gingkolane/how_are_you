Rails.application.routes.draw do

  post '/login', to: 'auth#create'
  get '/auth', to: 'auth#persist'

  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"

  resources :records
  resources :users
  resources :trials
  resources :treatments
  resources :groups
  resources :doctors
  resources :conditions
  # resources :groups_users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
