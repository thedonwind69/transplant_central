Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :cities, only: [:index, :show] do
      resources :posts, only: [:index, :create]
    end
    resources :posts, only: [:create, :index, :show, :delete]
    resources :categories, only: [:index, :show]
    # resource :user, only: [:create]
    resources :users, only: [:create, :show, :index] do 
      resources :posts, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy, :show, :index]
    # resource :session, only: [:create, :destroy, :show]
    
  
  end

  root "root_page#root"

end
