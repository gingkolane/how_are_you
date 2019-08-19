class RecordsController < ApplicationController

  def index
    records = Record.all
    render json: records
  end

  def show
    record = Record.find(params[:id])
    render json: record
  end 

end
