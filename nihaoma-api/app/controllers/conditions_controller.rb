class ConditionsController < ApplicationController

  def index
    conditions = Condition.all
    render json: conditions
  end

  def show
    condition = Condition.find(params[:id])
    render json: condition
  end 

  def findCondition(condition)
    byebug
    foundCondition = Condition.find_by(condition_name: condition)
    render json: foundCondition
  end 

end
