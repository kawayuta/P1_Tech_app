class CreateTeamMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :team_members do |t|
      t.integer :post_id
      t.integer :user_id
      t.integer :job_type
      t.boolean :accepted

      t.timestamps
    end
  end
end
