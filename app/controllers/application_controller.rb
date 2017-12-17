class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_new_messages


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [ :username, :email, :password, :image])
  end

  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to login_path, :notice => 'if you want to add a notice'
      ## if you want render 404 page
      ## render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
    end
  end

  def after_sign_in_path_for(resource)
    edit_user_path(current_user)
  end

  def set_new_messages
    if user_signed_in?
     joining_post_ids = current_user.team_members.where(accepted: true).map{|m| m.post_id}
     message_existing_post_ids = joining_post_ids.select{|id| GroupMessage.find_by(post_id: id) != nil}
     sorted_post_ids = message_existing_post_ids.sort_by{|id| GroupMessage.where(post_id: id).last.created_at}[0..2]
     @sorted_posts_and_messages = sorted_post_ids.map{|id| [Post.find(id), GroupMessage.where(post_id: id).last]}
   end
  end

end
