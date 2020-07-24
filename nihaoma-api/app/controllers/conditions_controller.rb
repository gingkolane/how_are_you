class ConditionsController < ApplicationController

  def index
    conditions = Condition.all
    render json: conditions
  end

  def show
    condition = Condition.find(params[:id])

    render json: {
      condition: condition,
      treatmentsOfCondition: condition.treatments,
      trialsOfCondition: condition.trials,
      doctorsOfCondition: condition.doctors
    }

  end

end
