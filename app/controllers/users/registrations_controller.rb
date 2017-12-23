class Users::RegistrationsController < Devise::RegistrationsController
  def new
    super
    @user = User.new
  end

  def create
    super do
      if params['user']['uid'] != nil
        @user = User.new(fb_user_params)
        #TODO image_urlとpasswordがうまくviewで渡されていないので調査。
        @user.password = Devise.friendly_token[0, 20]
        @user.remote_image_url = "http://graph.facebook.com/#{@user.uid}/picture?type=large"
        @user.save!

      end
    end
  end

  private
  def fb_user_params
    params.require(:user).permit(:username, :email, :role, :college, :major, :graduation_year, :password, :uid, :provider)
  end
end
