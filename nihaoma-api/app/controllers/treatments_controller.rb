class TreatmentsController < ApplicationController

  def index
    treatments = Treatment.all
    render json: treatments
  end

  def show
    treatment = Treatment.find(params[:id])
    render json: treatment
  end 



end
