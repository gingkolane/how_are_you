class VisitsController < ApplicationController

  def index
    visits = Visit.all
    render json: visits
  end

  def show
    visit = Visit.find(params[:id])
    render json: visit
  end 

end
