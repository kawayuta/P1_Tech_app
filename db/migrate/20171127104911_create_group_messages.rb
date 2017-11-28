class CreateGroupMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :group_messages do |t|
      t.text :content
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
  end
end
