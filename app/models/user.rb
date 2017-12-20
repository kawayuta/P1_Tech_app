class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :posts, dependent: :delete_all
  has_many :team_members, dependent: :delete_all
  has_many :group_messages, dependent: :delete_all
  has_many :comments, dependent: :delete_all
  has_many :notifications, dependent: :delete_all
  has_many :evaluations, dependent: :delete_all
  has_many :message_read_times, dependent: :delete_all

  mount_uploader :image, ImageUploader

  validates :email, presence: true, uniqueness: true

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid, provider: auth.provider).first

    unless user
      user = User.new(
          uid:      auth.uid,
          provider: auth.provider,
          email:    auth.info.email,
          username: auth.extra.raw_info.name,
          remote_image_url:    "http://graph.facebook.com/#{auth.uid}/picture?type=large",
          password: Devise.friendly_token[0, 20],
          token:    "",
      )
    else
      user.update( remote_image_url: "http://graph.facebook.com/#{auth.uid}/picture?type=large" )
    end

    # user.update( token: auth.credentials.token)
    user
  end




end
