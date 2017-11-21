Rails.application.routes.draw do

  resources :posts
  get '/top', to: 'top#index'

end
