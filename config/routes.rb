Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :tracks do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
