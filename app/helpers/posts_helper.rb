module PostsHelper

  def post_status_active_class(post, status)
    if post.status == status
      return ' status-active'
    end
    return ''
  end

  def icon_of_category(name)
    if name.downcase == 'game'
      icon = 'fa fa-gamepad'
    end

    return icon
  end

end
