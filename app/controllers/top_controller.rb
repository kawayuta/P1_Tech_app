class TopController < ApplicationController
  def index
    @post = Post.new

    @posts = Post.where(published: true).order('created_at DESC').page(params[:page]).per(10)
    ranked_post_ids = Vote.where(support: true).group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranked_posts = ranked_post_ids.map { |id| Post.find_by(id: id) }

      @categories = ['Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game', 'Game']

  end
end
