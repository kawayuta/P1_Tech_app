class TopController < ApplicationController
  def index
    @posts = Post.where(published: false)
  end
end
