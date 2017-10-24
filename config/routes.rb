Rails.application.routes.draw do
  namespace :api do
    get 'sessions/new'
  end

  namespace :api do
    get 'sessions/create'
  end

  get 'users/new'

  get 'users/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
