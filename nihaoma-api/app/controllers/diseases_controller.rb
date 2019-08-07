class DiseasesController < ApplicationController

  def index
    diseases = Disease.all
    render json: diseases
  end

  def show
    disease = Disease.find(params[:id])
    render json: disease
  end 


end
