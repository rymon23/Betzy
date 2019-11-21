Rails.application.routes.draw do
  # resources :reviews
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

    resources :users, only: [:create, :show, :update, :index] do 
      resources :line_items, only: [:index, :show, :create, :update, :destroy]
      resources :reviews, only: [:update, :destroy]
    end

    resources :products, only: [:show, :update, :destroy, :index] do
      resources :reviews, only: [:create]
    end

    resources :stores, only: [:show, :index, :create, :update] do
      resources :products, only: [:create]
      resources :reviews, only: [:index]
    end

    resources :categories, only: [:show, :index]
    resources :search_results, only: [:index]
    
    # resources :line_items do
    #   collection do
    #     get :index_all
    #   end
    # end

  end
end
