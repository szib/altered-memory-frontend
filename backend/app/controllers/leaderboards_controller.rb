class LeaderboardsController < ApplicationController

    def index
        @leaders = Leaderboard.all.sort_by(&:score).reverse.first(10)
        render json: @leaders, except: [:created_at, :updated_at]
    end

end
