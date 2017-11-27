Rails.application.routes.draw do

  resources :users, only:[:index,:show, :edit, :update]
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    get 'sign_up' => 'devise/registrations#new'
    get 'logout' => 'devise/sessions#destory'
  end

  root to: 'top#index'

  resources :posts do

    member do
      post 'support' => 'posts#support'
      post 'join' => 'posts#join'
      get 'approve' => 'posts#approve'
      delete 'leave' => 'posts#leave'
    end
    collection do
      get 'search' => 'posts#search'
    end
  end
  get '/top', to: 'top#index'

end
