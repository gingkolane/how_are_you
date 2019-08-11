class AuthController < ApplicationController
  # skip_before_action :authorized, only: :create

# auth controller is used to create token and verify token - check if user has the its correct token 

  def create
    user = User.find_by(username: user_params[:username])
    # if username and password both match those in the database
    if user && user.authenticate(user_params[:password])
      render json: {token: encode_token(user)}
    else
      render json: { errors: ["Wrong username or password bud. Sorry!"] }, status: :unprocessable_entity
    end
  end

  def persist
    if token
        render json: current_user
    end
  end

  private
  # note: for rails api, don't need to use require.
  def user_params
    params.permit(:username, :password)
  end

end


# :realname, :email, :mobile, 
# :status, :age, :gender, :city, :user_pict, :description, :tag