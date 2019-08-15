class ConditionsUsersController < ApplicationController

  def index
    conditionsUsers = ConditionsUser.all
    render json: conditionsUsers
  end

  def show
    conditionsUser = ConditionsUser.find(params[:id])
    # render json: conditionsUser,  
    render json: {id: conditionsUser.id, username: conditionsUser.user.username, group_name: conditionsUser.condition.condition_name}
  end 

  # A user select a group, to create a new conditionsUser in groups_users table
  # this is a post to groups_users
  def create
    conditionsUser = ConditionsUser.create(conditionsUser_params)
    # If user created successfully, server gives the user a json web token, user keeps this token in the browser, and use it in headers to authenticate itself when request information from server
    # If frontend is handled by rails, rails will setup a session(with user_id) to authenticate user and persist user connection. Now react handles frontend, getting data using json, we use json web token. 
    if conditionsUser.valid?
      render json: conditionsUser
    else
      render json: {errors: conditionsUser.errors.full_messages}
    end
  end

  private

  def conditionsUser_params
    params.require(:conditionsUser).permit(:condition_id, :user_id)
  end

end
