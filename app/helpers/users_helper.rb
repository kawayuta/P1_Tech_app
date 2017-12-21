module UsersHelper

  def user_role(user)
    case user.try(:role)
    when 1
      return 'Planner'
    when 2
      return 'Engineer'
    when 3
      return 'Designer'
    end
  end

  def user_role_color(user)
    case user.try(:role)
    when 1
      return '#45D480'
    when 2
      return '#F8BF4A'
    when 3
      return '#FE6B6B'
    end
  end

end
