class DiseasesUsersController < ApplicationController

  def index
    diseasesUsers = DiseasesUser.all
    render json: diseasesUsers
  end

  def show
    diseasesUser = DiseasesUser.find(params[:id])
    # render json: diseasesUser,  
    render json: {id: diseasesUser.id, username: diseasesUser.user.username, group_name: diseasesUser.disease.disease_name}
  end 

  # A user select a group, to create a new diseasesUser in groups_users table
  # this is a post to groups_users
  def create
    diseasesUser = DiseasesUser.create(diseasesUser_params)
    # If user created successfully, server gives the user a json web token, user keeps this token in the browser, and use it in headers to authenticate itself when request information from server
    # If frontend is handled by rails, rails will setup a session(with user_id) to authenticate user and persist user connection. Now react handles frontend, getting data using json, we use json web token. 
    if diseasesUser.valid?
      render json: diseasesUser
    else
      render json: {errors: diseasesUser.errors.full_messages}
    end
  end

  private

  def diseasesUser_params
    params.require(:diseasesUser).permit(:group_id, :user_id)
  end

end
