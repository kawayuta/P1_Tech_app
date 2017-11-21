class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable


  def self.find_for_oauth(auth)

    user = User.where(uid: auth.uid, provider: auth.provider).first
    unless user
      user = User.create(
          uid:      auth.uid,
          provider: auth.provider,
          email:    auth.info.email,
          password: Devise.friendly_token[0, 20],
          education: auth.info.user_education_history.to_s
      )

    end

    user
  end

  private

  def self.dummy_email(auth)
    "#{auth.uid}-#{auth.provider}@example.com"
  end

end
