class GroupMessagesController < ApplicationController
  before_action :set_post, except: :room_list
  before_action :set_notice


  def room_list
    joining_post_ids = current_user.team_members.where(accepted: true).map{|m| m.post_id}
    sorted_post_ids = joining_post_ids.sort_by do |id|
      if GroupMessage.find_by(post_id: id).present?
        GroupMessage.where(post_id: id).last.created_at
      else
        Post.find(id).created_at
      end
    end.reverse
    @room_list_posts_and_messages = sorted_post_ids.map{|id| [Post.find(id), GroupMessage.where(post_id: id).last, unread_messages_count(id)]}
  end

  def talk_room
    set_messages
    @planners = @post.team_members.where(job_type: 0, accepted: true).map{|m| User.find(m.user_id)}
    @engineers = @post.team_members.where(job_type: 1, accepted: true).map{|m| User.find(m.user_id)}
    @designers = @post.team_members.where(job_type: 2, accepted: true).map{|m| User.find(m.user_id)}
    create_or_update_message_read_time
    set_new_messages
  end

  def create
    GroupMessage.create(content: params[:content], post_id: params[:post_id], user_id: current_user.id)
    create_or_update_message_read_time
    set_messages
    set_new_messages
  end

  def destroy
    GroupMessage.find(params[:id]).destroy
    create_or_update_message_read_time
    set_messages
    set_new_messages
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


  def set_notice
    if user_signed_in?
      @notifications = Notification.where(from_user_id: current_user.id, is_read:false)
    end
  end

end
