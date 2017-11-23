class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @user = current_user
  end

  def show
  end


  def set_user
    @user = User.find(params[:id])
  end

end
