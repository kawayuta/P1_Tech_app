class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :posts
  has_many :team_members
  has_many :group_messages
  has_many :comments
  has_many :notifications
  has_many :evaluations

  mount_uploader :image, ImageUploader

  validates :email, presence: true, uniqueness: true

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid, provider: auth.provider).first
    unless user
      user = User.create(
          uid:      auth.uid,
          provider: auth.provider,
          email:    auth.info.email,
          username: auth.extra.raw_info.name,
          image:    "http://graph.facebook.com/#{auth.uid}/picture?type=large",
          password: Devise.friendly_token[0, 20],
          token:    "",
      )
    end
    # user.update( token: auth.credentials.token)
    user
  end




end
