class GroupsUsersController < ApplicationController

  def index
    groupsUsers = GroupsUser.all
    render json: groupsUsers
  end

  def show
    groupsUser = GroupsUser.find(params[:id])
    # render json: groupsUser,  
    render json: {id: groupsUser.id, username: groupsUser.user.username, group_name: groupsUser.group.group_name}
  end 

  # A user select a group, to create a new groupsUser in groups_users table
  # this is a post to groups_users
  def create
    groupsUser = GroupsUser.create(groupsUser_params)
    # If user created successfully, server gives the user a json web token, user keeps this token in the browser, and use it in headers to authenticate itself when request information from server
    # If frontend is handled by rails, rails will setup a session(with user_id) to authenticate user and persist user connection. Now react handles frontend, getting data using json, we use json web token. 
    if groupsUser.valid?
      render json: groupsUser
    else
      render json: {errors: groupsUser.errors.full_messages}
    end
  end

  private

  def groupsUser_params
    params.require(:groupsUser).permit(:group_id, :user_id)
  end

end
