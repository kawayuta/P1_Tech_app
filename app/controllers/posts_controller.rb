class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy, :support, :create_comment, :destroy_comment, :complete]
  before_action :set_templates, only: [:new, :create, :edit, :update]
  before_action :authenticate_user!

  require 'yaml'

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.where(published: true).order('created_at DESC')
    ranked_post_ids = Vote.where(support: true).group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranked_posts = ranked_post_ids.map { |id| Post.find_by(id: id) }

  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @self_member_info = @post.team_members.find_by(user_id: current_user.id)
    if unevaluated_after_release?
      return redirect_to new_evaluation_path(@post)
    end

    @founder = @post.user
    @requests = @post.team_members.where(accepted:false)
    @members = @post.team_members.where(accepted:true)

    set_comments
    # graph = Koala::Facebook::API.new(current_user.token)
    # graph.put_wall_post("本文", {
    #       "name" => "リンク先の名前（タイトル）",
    #       "link" => "http://www.campaign-site_url.xxx/",
    #       "description" => "リンクの説明",
    #       "picture" => "http://www.campaign-site_url.xxx/image.jpg"
    # })
  end

  # GET /posts/new
  def new
    @post = Post.new(num_of_planner: 0, num_of_engineer: 0, num_of_designer: 0)
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    @post.status = 0
    if params[:commit] == '投稿する'
      @post.published = true
      @post.team_members.build(user_id: current_user.id, job_type: 0, accepted: true)
    else
      @post.published = false
    end

    if @post.valid? && num_of_members_valid?
      @post.save
      if @post.published
        @save_type = 'public'
      else
        @save_type = 'private'
      end
      session[:post_created] = true
    else
      @post.errors.messages[:members] = ['must be added in at least one job type'] if !num_of_members_valid?
      render :new
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def join
    return redirect_to post_path(params[:id]) if TeamMember.find_by(post_id: params[:id], user_id: current_user.id)
    @join = TeamMember.create(post_id: params[:id], user_id: current_user.id, job_type: params[:job_type], accepted: false)
    current_user.notifications.join_notice_create(@join, @join.post.user, 'join')
    redirect_to post_path(params[:id])
  end

  def leave
    @leave = TeamMember.find_by(post_id: params[:id], user_id: current_user.id).destroy
    current_user.notifications.join_notice_create(@leave, @leave.post.user, 'leave')
    redirect_to post_path(params[:id])
  end

  def approve
    @approve = TeamMember.find_by(post_id: params[:id], user_id: params[:from_user])
    @approve.update(accepted: true)
    current_user.notifications.join_notice_create(@approve, @approve.user, 'approve')
    redirect_to post_path(params[:id])
  end


  def search
    @posts = Post.num_of_search(params[:sort]).where(published: true).order('created_at DESC')
    @title = params[:sort].upcase
    ranked_post_ids = Vote.where(support: true).group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranked_posts = ranked_post_ids.map { |id| Post.find_by(id: id) }
  end

  def support
  if @post.votes.vote_support(current_user,@post)
    flash[:notice] = "このペライチを応援をしました！"
  else
    flash[:notice] = "このペライチの応援をキャンセルしました"
  end
    redirect_to post_path(params[:id])
  end


  def success
    if session[:post_created]
      session[:post_created] = nil
    else
      redirect_to root_path
    end
    @posts = Post.where(published: true).where.not(id: current_user.posts.last.id).order('created_at DESC')
    @my_posts_id = current_user.posts.last
  end

  def create_comment
    Comment.create(content: params[:content], post_id: params[:id], user_id: current_user.id)
    set_comments
  end

  def destroy_comment
    Comment.find(params[:comment_id]).destroy
    set_comments
  end

  def complete
    @post.update(status: 2)
    redirect_to new_evaluation_path(post_id: @post.id)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      return redirect_to root_path flash[:notice] = "お探しのペライチは見つかりませんでした。" unless Post.find_by(id: params[:id])

      @post = Post.find(params[:id])
    end

    def set_comments
      @comments = Comment.where(post_id: params[:id]).includes(:user)
    end

    def set_templates
      @templates = Template.all
    end

    def num_of_members_valid?
      if @post.num_of_planner == 0 && @post.num_of_engineer == 0 && @post.num_of_designer == 0
        return false
      end
      return true
    end

    def unevaluated_after_release?
      @self_member_info && @self_member_info.accepted == true && @post.status == 'release' && !Evaluation.find_by(post_id: @post.id, user_id: current_user.id)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :detail, :image, :image_2, :image_3, :category_name, :motivation, :period, :user_id, :published, :status, :num_of_planner, :num_of_engineer, :num_of_designer).merge(user_id: current_user.id)
    end
end
