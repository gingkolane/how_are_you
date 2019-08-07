class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    users = User.all
    render json: users
  end

  def new
    @user = User.new
  end

  def show
    # user = User.find(params[:id])
    render json: user
  end 

  def create
    @user = User.create(user_params)
    if @user.valid?
 
      redirect_to user_path(@user)
    else  
      redirect_to new_user_path
    end
  end

  def edit
  end

  def update
    @user.update(user_params)
    redirect_to @user, notice: 'User was successfully updated.' 
  end

  def destroy
    @user.destroy
    redirect_to users_url, notice: 'User was successfully destroyed.'
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :realname, :email, :mobile, 
    :status, :age, :gender, :city, :user_pict, :description, :tag)
  end

end