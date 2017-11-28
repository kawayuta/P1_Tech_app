class TopController < ApplicationController
  def index
    @posts = Post.where(published: false).order('created_at DESC')
  end
end
