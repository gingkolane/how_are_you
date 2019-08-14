Rails.application.routes.draw do
  resources :groups_users
  post "/login", to: "auth#create"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"

  resources :visits
  resources :users
  resources :trials
  resources :treatments
  resources :groups
  resources :doctors
  resources :diseases
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
