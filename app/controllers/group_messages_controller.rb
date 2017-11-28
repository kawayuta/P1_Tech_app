class GroupMessagesController < ApplicationController
  before_action :set_post

  def talk_room
    set_messages
  end

  def create
    GroupMessage.create(content: params[:content], post_id: params[:post_id], user_id: current_user.id)
    set_messages
  end

  def destroy
    GroupMessage.find(params[:id]).destroy
    set_messages
  end

  private

    def set_messages
      @messages = GroupMessage.where(post_id: params[:post_id]).includes(:user)
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

end