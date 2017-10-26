Rails.application.routes.draw do
  get 'tracks/index'

  get 'tracks/show'

  get 'tracks/new'

  get 'tracks/create'

  get 'tracks/destroy'

  get 'tracks/edit'

  get 'tracks/update'

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
