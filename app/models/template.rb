class Template < ApplicationRecord

  validates :image, presence: true

  has_many :posts

end
