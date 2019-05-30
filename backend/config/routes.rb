Rails.application.routes.draw do
  resources :leaderboards
  get '/leaderboards' => 'leaderboards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
