class GroupMessage < ApplicationRecord

  validates :content, presence: true

  belongs_to :post
  belongs_to :user

end
