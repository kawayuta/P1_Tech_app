class Notification < ApplicationRecord

  belongs_to :user, class_name: 'User', foreign_key: 'user_id'

  def self.join_notice_create(target, from_user, action)
    if target.model_name == 'TeamMember' && action == 'join'
        Notification.create(
            from_user_id:from_user.id,
            target_content_id: target.post.id,
            target_content_type: target.post.model_name,
            content:"申請"
        )
    elsif target.model_name == 'TeamMember' && action == 'leave'
      Notification.create(
          from_user_id:from_user.id,
          target_content_id: target.post.id,
          target_content_type: target.post.model_name,
          content:"取消"
      )
    elsif target.model_name == 'TeamMember' && action == 'approve'
      Notification.create(
          from_user_id:from_user.id,
          target_content_id: target.post.id,
          target_content_type: target.post.model_name,
          content:"許可"
      )
    end
  end

end
