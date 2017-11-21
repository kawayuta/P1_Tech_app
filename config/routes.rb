Rails.application.routes.draw do

  resources :users
  get '/top', to: 'top#index'

end
