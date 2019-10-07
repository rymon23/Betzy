Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  # get 'sessions/destroy'
  # get 'users/new'
  # get 'users/create'
  # get 'users/update'
  # get 'users/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :new, :destroy]
    resources :users, only: [:create, :show, :update, :index]  

    resources :categories, only: [:show, :index]

    resources :products, only: [:show, :update, :destroy, :index] do    
      # resources :reviews, only: [:index, :create]
    end

    resources :stores, only: [:show, :index, :create, :update] do
      resources :products, only: [:create]
    end

  end
end
