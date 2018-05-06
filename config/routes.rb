Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations',

  }

  get '/checkout/:user_id', to: 'product#check_out_shopping_cart', as: "check_out"

  resources :users
  resources :images
  resources :products
  resources :order_details
  resources :orders
  resources :comments
  resources :metals
  resources :gem_stones

  root to: 'homes#index'
end
