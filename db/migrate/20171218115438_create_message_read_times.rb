class CreateMessageReadTimes < ActiveRecord::Migration[5.1]
  def change
    create_table :message_read_times do |t|
      t.integer :user_id
      t.integer :post_id
      t.datetime :last_read_at

      t.timestamps
    end
  end
end
