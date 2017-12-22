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
    if name.downcase == 'social'
      icon = 'fa fa-globe'
    elsif  name.downcase == 'business'
      icon = 'fa fa-briefcase'
    elsif  name.downcase == 'tool'
      icon = 'fa fa-wrench'
    elsif  name.downcase == 'game'
      icon = 'fa fa-gamepad'
    elsif  name.downcase == 'media'
      icon = 'fa fa-television'
    elsif  name.downcase == 'other'
      icon = 'fa fa-file-o'
    else  name.downcase == 'other'
    icon = 'fa fa-file-o'
    end

    return icon
  end

  def post_icon_of_category(name)
    if name.downcase == 'social'
      icon = 'globe'
    elsif  name.downcase == 'business'
      icon = 'briefcase'
    elsif  name.downcase == 'tool'
      icon = 'wrench'
    elsif  name.downcase == 'game'
      icon = 'gamepad'
    elsif  name.downcase == 'media'
      icon = 'television'
    elsif  name.downcase == 'other'
      icon = 'file-o'
    else  name.downcase == 'other'
    icon = 'file-o'
    end

    return icon
  end

end
