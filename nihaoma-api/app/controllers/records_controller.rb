class RecordsController < ApplicationController

  def index
    records = Record.all
    render json: records
  end

  def show
    record = Record.find(params[:id])
    render json: record
  end 

  def create
    # find condition from input condition_name, strict
    condition = Condition.find_by(condition_name: params[:myCondition])
    
    # if this user has entered this condition before, attach this record to pre-existing condition_user
    input_conditions_user = ConditionsUser.find_by(condition_id: condition.id, user_id: params[:user_id])
    if input_conditions_user
      conditions_user = input_conditions_user
    else 
      conditions_user = ConditionsUser.create(condition_id: condition.id, user_id: params[:user_id])
    end 

    # if this doctor is in the doctor database, use this doctor's preexisit id, if not, create new doctor
    input_doctor = Doctor.find_by(doctor_name: params[:doctor_name])
    if input_doctor
      doctor = input_doctor
    else
      doctor = Doctor.create(doctor_name: params[:doctor_name], FACILITY_NAME: params[:FACILITY_NAME], CITY: params[:CITY])
    end 
    
    # create new record using doctor.id, conditions_user.id, date_of_vist
    record = Record.create(conditions_user_id: conditions_user.id, doctor_id: doctor.id, date_of_visit: params[:date_of_visit], myCondition: params[:myCondition] )
    
    if params[:treatment_name]
      treatment = Treatment.find_by(treatment_name: params[:treatment_name])
      RecordsTreatment.create(record_id: record.id, treatment_id: treatment.id)
    end
    
    render json: { 
      record: record,
      condition: record.condition,
      treatments: record.treatments
    }

  end

  private
  def record_params
    params.permit(:user_id, :date_of_visit, :doctor_name, :FACILITY_NAME, :CITY, :myCondition, :treatment_name )
  end

end
