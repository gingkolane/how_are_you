Rails.application.routes.draw do
  resources :visits
  resources :users
  resources :trials
  resources :treatments
  resources :groups
  resources :doctors
  resources :diseases
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
