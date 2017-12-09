module PostsHelper

  def post_status_active_class(post, status)
    if post.status == status
      return ' status-active'
    end
    return ''
  end

end
