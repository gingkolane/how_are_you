class AuthController < ApplicationController
  # skip_before_action :authorized, only: :create

# auth controller is used to create token and verify token - check if user has the its correct token 

  def create
    user = User.find_by(username: user_params[:username])
    # if username and password both match those in the database
    if user && user.authenticate(user_params[:password])
      # myConditions = user.conditions
      render json: {
        user: user, 
        token: encode_token(user),
        myConditions: user.conditions,
        myRecords: user.records,
        myTreatments: user.treatments,
        myDoctors: user.doctors
      }
    else
      render json: { errors: ["Wrong username or password bud. Sorry!"] }, status: :unprocessable_entity
    end
  end

  def persist
    if token 
      # myConditions = current_user.conditions
      # myRecords = current_user.records
      # myTreatments = current_user.treatments
      # myDoctors = current_user.doctors

      render json: { 
        currentUser:current_user, 
        myConditions: current_user.conditions,
        myRecords: current_user.records,
        myTreatments: current_user.treatments,
        myDoctors: current_user.doctors
      }

    end
  end  


  private
  def user_params
    params.permit(:username, :password)
  end

end