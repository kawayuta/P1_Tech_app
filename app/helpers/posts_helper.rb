module PostsHelper

  def post_status_active_class(post, status)
    if post.status == status
      return ' status-active'
    end
    return ''
  end

  def post_status_color(post, status)
    if post.status == status
      return post.main_color
    end
    return '#9B9B9B'
  end

  def post_motivation_active_class(post, motivation)
    if post.motivation == motivation
      return ' commitment-item-active'
    end
    return ''
  end

  def post_motivation_color(post, motivation)
    if post.motivation == motivation
      return post.main_color
    end
    return '#9B9B9B'
  end

  def comment_color_style(comment)
    if comment.user_id == current_user.id
      return "color: #fff; background-color: #{comment.post.main_color};"
    end
    return ''
  end

  def comment_time_color_style(comment)
    if comment.user_id == current_user.id
      return "color: #fff;"
    end
    return "color: #{comment.post.main_color};"
  end

  def icon_of_category(name)
    if name.downcase == 'game'
      icon = 'fa fa-gamepad'
    end

    return icon
  end

  def post_icon_of_category(name)
    if name.downcase == 'game'
      icon = 'gamepad'
    end

    return icon
  end

end
