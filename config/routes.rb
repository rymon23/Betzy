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
    resources :users, only: [:create, :show]
  # resources :products, only: [:index, :create, :new, :edit]

  # namespace :api, defaults: { format: 'json' } do
  #   # resources :products, only: [:create, :new, ]
  #   resources :reviews, only: [:create, :new, :update, :destroy]
  end
end
