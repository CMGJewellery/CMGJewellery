Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
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
