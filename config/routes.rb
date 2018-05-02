Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations',

  }
  # resources :users
  # scope :admin do
  #   resources :users, only: [:destory]
  # end
  resources :users
  resources :images
  resources :products
  resources :style_of_products
  resources :order_details
  resources :orders
  resources :comments
  resources :metals
  resources :gem_stones

  root to: 'homes#index'
end
