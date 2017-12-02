class NotificationsController < ApplicationController

  def index
    @notifications = Notification.where(from_user_id: current_user.id)
  end

end
