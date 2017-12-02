class CreateEvaluations < ActiveRecord::Migration[5.1]
  def change
    create_table :evaluations do |t|
      t.integer :post_id
      t.integer :user_id
      t.integer :first_evaluated_user
      t.integer :second_evaluated_user
      t.integer :third_evaluated_user
      t.integer :fourth_evaluated_user
      t.integer :fifth_evaluated_user

      t.timestamps
    end
  end
end
