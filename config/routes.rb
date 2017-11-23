Rails.application.routes.draw do

  resources :users, only:[:index,:show]

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'top#index'
  resources :posts do
    member do
      post 'join' => 'posts#join'
      get 'approve' => 'posts#approve'
      delete 'leave' => 'posts#leave'
    end
  end
  get '/top', to: 'top#index'

end
