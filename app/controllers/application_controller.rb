class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  protected

  def after_sign_in_path_for(resource)
    edit_user_path(current_user)
  end

end
