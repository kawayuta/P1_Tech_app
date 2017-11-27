class Vote < ApplicationRecord

  belongs_to :post


  def self.vote_support(user,post)
    Vote.create(user_id:user.id,support:true) unless @vote = Vote.find_by(user_id: user,post_id:post)
    if @vote.support
      @vote.update(support:false)
      return false
    else
      @vote.update(support:true)
      return true
    end
  end

end
