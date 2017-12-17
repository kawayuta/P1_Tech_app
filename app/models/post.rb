class Post < ApplicationRecord
  include SearchCop

  validates :title, presence: true, length: { maximum: 30 }
  validates :detail, presence: true, length: { maximum: 200 }
  validates :published, inclusion: {in: [true, false]}
  validates :status, presence: true
  validates :num_of_planner, presence: true
  validates :num_of_engineer, presence: true
  validates :num_of_designer, presence: true
  validates :period, presence: true, length: { maximum: 24 }
  validates :scale, presence: true, length: { maximum: 100 }
  validates :scale, presence: true, length: { maximum: 100 }
  validates :category_name, presence: true
  validates :main_color, presence: true


  belongs_to :user
  has_many :team_members
  has_many :votes
  has_many :group_messages
  has_many :comments
  has_many :evaluations

  mount_uploader :image, ImageUploader
  mount_uploader :image_2, ImageUploader
  mount_uploader :image_3, ImageUploader

  enum status: { planning: 0, development: 1, release: 2 }

  search_scope :search do
    attributes :num_of_designer, :num_of_engineer, :num_of_planner
  end


  def self.num_of_search(type)
   if type == 'planner'
     @posts = Post.search('(num_of_planner > 0)')
   elsif type == 'engineer'
     @posts = Post.search('(num_of_engineer > 0)')
   elsif type == 'designer'
     @posts = Post.search('(num_of_designer > 0)')
   end
   return @posts
  end




end
