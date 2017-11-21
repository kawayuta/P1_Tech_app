Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'top#index'
  resources :posts
  get '/top', to: 'top#index'

end
