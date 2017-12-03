class EvaluationsController < ApplicationController

  def new
    @post = Post.find(params[:post_id])
    @members = @post.team_members.reject{|m| m.user_id == current_user.id}
  end

  def create
  end

end
