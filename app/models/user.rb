class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :posts
  has_many :team_members
  has_many :group_messages

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
          education: auth.info.user_education_history.to_s
      )
    end
    user.update( token: auth.credentials.token)
    user
  end




end
