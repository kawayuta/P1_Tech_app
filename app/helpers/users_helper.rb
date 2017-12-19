module UsersHelper

  def user_role(user)
    case user.try(:role)
    when 0
      return 'Planner'
    when 1
      return 'Engineer'
    when 2
      return 'Designer'
    end
  end

  def user_role_color(user)
    case user.try(:role)
    when 0
      return '#45D480'
    when 1
      return '#F8BF4A'
    when 2
      return '#FE6B6B'
    end
  end

end
