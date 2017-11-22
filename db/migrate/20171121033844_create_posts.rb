class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :outline
      t.text :detail
      t.string :image
      t.integer :template_id
      t.integer :user_id
      t.boolean :published
      t.integer :status
      t.integer :num_of_planner
      t.integer :num_of_engineer
      t.integer :num_of_designer
      t.integer :num_of_graphicer

      t.timestamps
    end
  end
end
