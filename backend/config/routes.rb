Rails.application.routes.draw do
  get '/leaderboards' => 'leaderboards#index'
  post '/leaderboards' => 'leaderboards#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
