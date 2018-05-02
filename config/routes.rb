Rails.application.routes.draw do
  get 'user/edit'



  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations',

  }
  scope :admin do
    resources :users
  end

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
