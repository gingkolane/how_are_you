class ConditionsController < ApplicationController

  def index
    conditions = Condition.all
    render json: conditions
  end

  def show
    condition = Condition.find(params[:id])

    render json: {
      conditionName: condition_name,
      myTreatmentsOfCondition: condition.my_treatments
      # treatmentsOfCondition: condition.treatments,
      # trialsOfCondition: condition.trials,
      # doctorsOfCondition: condition.doctors
    }
  end

  def show

end
