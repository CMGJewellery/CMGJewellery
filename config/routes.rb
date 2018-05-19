Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    registrations: 'users/registrations',

  }

  get '/checkout/:user_id', to: 'product#check_out_shopping_cart', as: "check_out"
  
  resources :products, only: [:show, :index]
  
  # user can edit profile
  resources :users, only: [:edit, :update] do
    # only admin can manage post
    resources :products, only: [:new, :edit, :update, :destroy, :create]  do
      resources :images, only: [:create, :edit, :update, :show, :destroy]
    end
  end
  # everyone can view products
  #----------------------------
  
  # resources :images
  # resources :users
  # resources :products
  resources :order_details
  resources :orders
  resources :comments
  #resources :metals
  #resources :gem_stones

  root to: 'homes#index' 


  # ---------- Ajax ----------
  get '/check_email', to: 'users#check_email' # check existed email

end
