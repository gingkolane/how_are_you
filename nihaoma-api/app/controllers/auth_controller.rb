class AuthController < ApplicationController
  # skip_before_action :authorized, only: :create

# auth controller is used to create token and verify token - check if user has the its correct token 

  # post '/login', to: 'auth#create', a user enters its information and post to create a authorization process, creat a token for the user

  def create
    user = User.find_by(username: user_params[:username])

    # if username and password both match those in the database
    if user && user.authenticate(user_params[:password])

      current_user = user

      render json: {
        token: encode_token(user), 
        currentUser: current_user, 
        myConditions: current_user.conditions,
        myDoctors: current_user.doctors,
        myRecords: current_user.records,
        myTreatments: current_user.my_treatments, 
        myGroups: current_user.groups
      }

    else
      render json: { errors: ["Wrong username or password bud. Sorry!"] }, status: :unprocessable_entity
    end
  end

  # get '/auth', to: 'auth#persist'
  def persist

      if token 
        current_user

      render json: { 
        currentUser: current_user, 
        myConditions: current_user.conditions,
        myRecords: current_user.records,
        myTreatments: current_user.my_treatments,
        myDoctors: current_user.doctors,
        myGroups: current_user.groups
      }
    end
  end  

  private
  def user_params
    params.permit(:username, :password)
  end

end


      # treatments_for_my_conditions = user.conditions.map do |condition|
      #   treatments_for_this_condition = condition.treatments
      #   treatments_for_this_user = user.treatments 
      #   treatments = user.treatments & condition.treatments
      #   object = {
      #       name: condition.condition_name,
      #       treatments: treatments
      #   }
      #   object && 'No treatment yet'
      # end
      
      # myrecords_infull = user.records.map do |record|
      #   object = {
      #     condition: record.condition,
      #     doctor: record.doctor,
      #     date_of_visit: record.date_of_visit,
      #     treatments: record.treatments
      #   }
      #   object && 'No record yet'
      # end 

            # treatments_for_my_conditions = current_user.conditions.map do |condition|
      #   treatments_for_this_condition = condition.treatments
      #   treatments_for_this_user = current_user.treatments 
      #   treatments = current_user.treatments & condition.treatments
        
      #   object = {
      #     name: condition.condition_name,
      #     treatments: treatments
      #   }

      #   object && 'No treatment yet'
      # end

      # myrecords_infull = current_user.records.map do |record|
      #   object = {
      #     condition: record.condition,
      #     doctor: record.doctor,
      #     date_of_visit: record.date_of_visit,
      #     treatments: record.treatments
      #   }
      #   object && 'No record yet'
      # end 

             # is the name here correct? what is condition_with_treatment
        # condition_with_treatment: treatments_for_my_conditions,
        # myrecords_infull: myrecords_infull