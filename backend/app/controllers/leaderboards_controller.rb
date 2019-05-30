class LeaderboardsController < ApplicationController

    def index
        @leaders = Leaderboard.all
        render json: @leaders, except: [:created_at, :updated_at]
    end

end
