class TeamMember < ApplicationRecord

  validates :job_type, presence: true
  validates :accepted, inclusion: {in: [true, false]}

  belongs_to :post
  belongs_to :user

end
