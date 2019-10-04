class Api::UsersController < ApplicationController
  def show
      @user = User.find_by(id: params[:id])    
      render "api/users/show"
  end

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
