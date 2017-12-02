class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.string      :content
      t.boolean     :is_read, default: false
      t.references  :user
      t.references  :from_user
      t.references  :target_content
      t.string    :target_content_type
      t.timestamps
    end
  end
end
