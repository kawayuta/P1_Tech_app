class TopController < ApplicationController
  def index
    @posts = Post.where(published: true).order('created_at DESC')
  end
end
