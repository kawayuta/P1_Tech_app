class Post < ApplicationRecord
  include SearchCop

  validates :title, presence: true, length: { maximum: 30 }
  validates :outline, presence: true, length: { maximum: 50 }
  validates :detail, presence: true, length: { maximum: 200 }
  validates :published, inclusion: {in: [true, false]}
  validates :status, presence: true
  validates :num_of_planner, presence: true
  validates :num_of_engineer, presence: true
  validates :num_of_designer, presence: true

  belongs_to :template
  belongs_to :user
  has_many :team_members

  mount_uploader :image, ImageUploader

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
