Rails.application.routes.draw do
  resources :groups_users
  post "/login", to: "auth#create"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"
  post "/conditions/findCondition", to: "conditions#findCondition"

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
