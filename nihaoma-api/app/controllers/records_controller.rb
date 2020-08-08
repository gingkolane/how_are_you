class RecordsController < ApplicationController

  def index
    records = Record.all

    full_records = records.map do |record|
      
      object = {
        user: record.user,
        condition: record.condition,
        doctor: record.doctor,
        date_of_visit: record.date_of_visit,
        treatments: record.treatments
      }

      object
    end
    render json: full_records
  end

  def show
    record = Record.find(params[:id])
    render json: {
      user: record.user,
      condition: record.condition,
      doctor: record.doctor,
      date_of_visit: record.date_of_visit,
      treatments: record.treatments
    }
  end 

  def create

    # if record_type = 'self_described'

    record = Record.create(condition_id: condition.id, user_id: user.id, doctor_id: doctor.id, date_of_visit: record.date_of_visit, record_type: "self-described")

    # if record_type = 'doctor_visit'

    # record = Record.create(doctor_id: doctor.id, user_id: user.id, date_of_visit: params[:date_of_visit])

    
  #   # find condition from input condition_name, strict
  #   condition = Condition.find_by(condition_name: params[:myCondition])
  #   # define user who created the record
  #   user = User.find(params[:user_id])
  #   # user = current_user

  #   # if this user has entered this condition before, attach this record to pre-existing condition_user
  #   input_conditions_user = ConditionsUser.find_by(condition_id: condition.id, user_id: params[:user_id])
  #   if input_conditions_user
  #     conditions_user = input_conditions_user
  #   else 
  #     conditions_user = ConditionsUser.create(condition_id: condition.id, user_id: params[:user_id])
  #   end 

  #   # if this doctor is in the doctor database, use this doctor's preexisit id, if not, create new doctor
  #   input_doctor = Doctor.find_by(doctor_name: params[:doctor_name])
  #   if input_doctor
  #     doctor = input_doctor
  #   else
  #     doctor = Doctor.create(doctor_name: params[:doctor_name], FACILITY_NAME: params[:FACILITY_NAME], CITY: params[:CITY])
  #   end 
    
  #   # create new record using doctor.id, conditions_user.id, date_of_vist
  #   record = Record.create(conditions_user_id: conditions_user.id, doctor_id: doctor.id, date_of_visit: params[:date_of_visit], myCondition: params[:myCondition] )
    
  #   if params[:treatment_name]
  #     treatment = Treatment.find_by(treatment_name: params[:treatment_name])
  #     RecordsTreatment.create(record_id: record.id, treatment_id: treatment.id)
  #   end

  #   myrecords_infull = user.records.map do |record|
  #     object = {
  #       condition: record.condition,
  #       doctor: record.doctor,
  #       date_of_visit: record.date_of_visit,
  #       treatments: record.treatments
  #     }
  #     object
  #   end 
    
    render json: { 
        user: user,
        date_of_visit: record.date_of_visit,
        condition: record.condition,
        doctor: record.doctor,
        treatments: record.treatments,
        recordType:record.record_type

      # newly_created_record: {
      #   user: user,
      #   date_of_visit: record.date_of_visit,
      #   condition: record.condition,
      #   doctor: record.doctor,
      #   treatments: record.treatments,
      #   recordType:record.record_type
      # },

  #     myrecords_infull: myrecords_infull
      }

  end

  

  private
  def record_params
    params.permit(:user_id, :condition_id, :doctor_id, :record_type, :date_of_visit, :doctor_name, :FACILITY_NAME, :CITY, :myCondition, :treatment_name )
  end

end
