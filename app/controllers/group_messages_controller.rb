class GroupMessagesController < ApplicationController
  before_action :set_post, except: :room_list

  def room_list
    # @posts = current_user.team_members.where(accepted: true).map { |m| Post.find(m.post_id) }
  end

  def talk_room
    set_messages
    @planners = @post.team_members.where(job_type: 0, accepted: true).map{|m| User.find(m.user_id)}
    @engineers = @post.team_members.where(job_type: 1, accepted: true).map{|m| User.find(m.user_id)}
    @designers = @post.team_members.where(job_type: 2, accepted: true).map{|m| User.find(m.user_id)}
    create_or_update_message_read_time
  end

  def create
    GroupMessage.create(content: params[:content], post_id: params[:post_id], user_id: current_user.id)
    create_or_update_message_read_time
    set_messages
  end

  def destroy
    GroupMessage.find(params[:id]).destroy
    create_or_update_message_read_time
    set_messages
  end

  private

    def set_messages
      @messages = GroupMessage.where(post_id: params[:post_id]).includes(:user)
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    def create_or_update_message_read_time
      if @post.message_read_times.find_by(user_id: current_user.id)
        @post.message_read_times.find_by(user_id: current_user.id).update(last_read_at: Time.now)
      else
        MessageReadTime.create(user_id: current_user.id, post_id: @post.id, last_read_at: Time.now)
      end
    end

end
