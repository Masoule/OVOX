Rails.application.routes.draw do

  get 'comments/new'

  get 'comments/create'

  get 'comments/destroy'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :tracks do
      
    end
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
