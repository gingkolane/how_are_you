class AuthController < ApplicationController
  # skip_before_action :authorized, only: :create

# auth controller is used to create token and verify token - check if user has the its correct token 

  def create
    user = User.find_by(username: user_params[:username])
    # if username and password both match those in the database
    if user && user.authenticate(user_params[:password])
      
      treatments_for_my_conditions = user.conditions.map do |condition|
        treatments_for_this_condition = condition.treatments
        treatments_for_this_user = user.treatments 
        treatments = user.treatments & condition.treatments
        object = {
            name: condition.condition_name,
            treatments: treatments
        }
        object
      end
      
      myrecords_infull = user.records.map do |record|
        object = {
          condition: record.condition,
          doctor: record.doctor,
          date_of_visit: record.date_of_visit,
          treatments: record.treatments
        }
        object
      end 

      render json: {
        user: user, 
        token: encode_token(user),
        myConditions: user.conditions,
        myRecords: user.records,
        condition_with_treatment: treatments_for_my_conditions,
        myTreatments: user.treatments,
        myDoctors: user.doctors,
        myrecords_infull: user.myrecords_infull
      }
    else
      render json: { errors: ["Wrong username or password bud. Sorry!"] }, status: :unprocessable_entity
    end
  end

  def persist
    if token 
      treatments_for_my_conditions = current_user.conditions.map do |condition|
        treatments_for_this_condition = condition.treatments
        treatments_for_this_user = current_user.treatments 
        treatments = current_user.treatments & condition.treatments
        
        object = {
          name: condition.condition_name,
          treatments: treatments
        }

        object
      end

      myrecords_infull = current_user.records.map do |record|
        object = {
          condition: record.condition,
          doctor: record.doctor,
          date_of_visit: record.date_of_visit,
          treatments: record.treatments
        }
        object
      end 

      render json: { 
        currentUser: current_user, 
        myConditions: current_user.conditions,
        myRecords: current_user.records,
        myTreatments: current_user.treatments,
        condition_with_treatment: treatments_for_my_conditions,
        myDoctors: current_user.doctors,
        myrecords_infull: myrecords_infull
      }
    end
  end  


  private
  def user_params
    params.permit(:username, :password)
  end

end