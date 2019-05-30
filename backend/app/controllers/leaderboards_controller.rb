class LeaderboardsController < ApplicationController

    def index
        @leaders = Leaderboard.all.sort_by(&:score).reverse.first(10)
        render json: @leaders, except: [:created_at, :updated_at]
    end

    def create
        leaderboard = Leaderboard.new(leaderboard_params)
        
        if leaderboard.save
            render json: leaderboard, except: [:created_at, :updated_at]
        else
            render json: {message: 'Error'}, status: 400
        end
    end

    def leaderboard_params
        params.require(:leaderboard).permit(:name, :score, :time)      
    end
    
end
