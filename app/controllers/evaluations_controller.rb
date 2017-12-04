class EvaluationsController < ApplicationController

  def new
    @post = Post.find(params[:post_id])
    team_members = @post.team_members.where(accepted: true).reject{|m| m.user_id == current_user.id}
    @members = team_members.map{|m| User.find(m.user_id)}
    @members_hash = Hash[@members.map{|m| [m.id, m.username]}].to_json
  end

  def create
    Evaluation.create(evaluation_params)
    redirect_to root_path
  end

  private
    def evaluation_params
      params.permit(:post_id, :first_evaluated_user, :second_evaluated_user, :third_evaluated_user, :fourth_evaluated_user, :fifth_evaluated_user).merge(user_id: current_user.id)
    end

end
