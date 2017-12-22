class TopController < ApplicationController
  def index
    @post = Post.new

    @posts = Post.where(published: true).order('created_at DESC').page(params[:page]).per(12)
    ranked_post_ids = Vote.where(support: true).group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranked_posts = ranked_post_ids.map { |id| Post.find_by(id: id) }

    @categories = ['Social', 'Business', 'Tool', 'Game', 'Media', 'Other']

    if user_signed_in?
      @notifications = Notification.where(from_user_id: current_user.id, is_read:false)
    end

  end
end
