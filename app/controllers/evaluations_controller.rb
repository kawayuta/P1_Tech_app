class EvaluationsController < ApplicationController

  def new
    set_post_and_members
  end

  def create
    @evaluation = Evaluation.new(evaluation_params)
    if @evaluation.save
      redirect_to root_path
    else
      set_post_and_members
      flash[:notice] = "未選択項目があります"
      render :new
    end
  end

  private
    def set_post_and_members
      @post = Post.find(params[:post_id])
      team_members = @post.team_members.where(accepted: true).reject{|m| m.user_id == current_user.id}
      @members = team_members.map{|m| User.find(m.user_id)}
      @members_hash = Hash[@members.map{|m| [m.id, m.username]}].to_json
    end

    def evaluation_params
      params.permit(:post_id, :first_evaluated_user, :second_evaluated_user, :third_evaluated_user, :fourth_evaluated_user, :fifth_evaluated_user).merge(user_id: current_user.id)
    end

end
