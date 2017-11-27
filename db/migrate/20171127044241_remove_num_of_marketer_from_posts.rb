class RemoveNumOfMarketerFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :num_of_marketer, :integer
  end
end
