class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :detail
      t.string :category_name
      t.string :image
      t.string :image_2
      t.string :image_3
      t.integer :template_id
      t.integer :user_id
      t.boolean :published
      t.integer :status
      t.integer :num_of_planner
      t.integer :num_of_engineer
      t.integer :num_of_designer
      t.integer :motivation, default: 2
      t.integer :period, default: 2
      t.string  :main_color
      t.timestamps
    end
  end
end
