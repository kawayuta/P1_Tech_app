class TeamMember < ApplicationRecord

  validates :job_type, presence: true
  validates :accepted, inclusion: {in: [true, false]}

  belongs_to :post
  belongs_to :user


  enum job_types: { engineer: 0, designer: 1, planner: 2, marketer:3 }

  # request:申請中, permission:許可, rejection:却下
  enum invite_flag: { request:0, permission:1, rejection: 2 }

end
