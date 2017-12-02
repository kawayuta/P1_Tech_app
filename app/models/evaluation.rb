class Evaluation < ApplicationRecord

  validates :first_evaluated_user, presence: true
  validates :second_evaluated_user, presence: true
  validates :third_evaluated_user, presence: true
  validates :fourth_evaluated_user, presence: true
  validates :fifth_evaluated_user, presence: true

  belongs_to :post
  belongs_to :user

end
