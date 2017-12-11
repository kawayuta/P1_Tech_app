class Image3Uploader < CarrierWave::Uploader::Base

# リサイズしたり画像形式を変更するのに必要
  include CarrierWave::RMagick

  # 画像の上限を700pxにする
  process :resize_to_limit => [1980, 1080]

  # 保存形式をJPGにする
  process :convert => 'jpg'

  # サムネイルを生成する設定
  version :thumb do
    process :resize_to_limit => [600, 400]
  end

  # jpg,jpeg,gif,pngしか受け付けない
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # ファイル名は日本語が入ってくると嫌なので、下記のようにしてみてもいい。
  # 日付(20131001.jpgみたいなファイル名)で保存する
  def filename
    "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected
  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
  end

end
