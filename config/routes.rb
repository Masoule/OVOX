Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :tracks, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root" 
end
