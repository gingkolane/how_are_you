class TrialsController < ApplicationController

  def index
    trials = Trial.all
    render json: trials
  end

  def show
    trial = Trial.find(params[:id])
    render json: trial
  end 

end
