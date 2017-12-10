class TopController < ApplicationController
  def index
    @post = Post.new

    @posts = Post.where(published: true).order('created_at DESC')
    ranked_post_ids = Vote.where(support: true).group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranked_posts = ranked_post_ids.map { |id| Post.find_by(id: id) }
  end
end
