class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]
  before_action :authenticate_user!


  def index
    @user = current_user
  end

  def show
  end

  def edit
    return redirect_to edit_user_path(current_user) unless current_user == User.find(params[:id])
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to @user
    else
      render 'edit'
    end
  end


  def set_user
    return redirect_to root_path flash[:notice] = "お探しのペライチユーザーは見つかりませんでした。" unless User.find_by(id: params[:id])
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email)
  end

end
