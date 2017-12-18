class MessageReadTime < ApplicationRecord

  validates :last_read_at, presence: true

  belongs_to :user
  belongs_to :post

end
