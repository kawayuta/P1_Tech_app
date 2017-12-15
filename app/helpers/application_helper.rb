module ApplicationHelper

  def created_time_distance(instance)
    distance = (Time.now - instance.created_at).to_i
    if distance >= 604800
      return "#{instance.created_at.strftime("%m/%d %H:%M")}"
    elsif distance >= 86400
      return "#{distance / 86400}日前"
    elsif distance >= 3600
      return "#{distance / 3600}時間前"
    else
      return "#{distance / 3600}分前"
    end
  end

end
