class RenamePrivateFlagColumnToPosts < ActiveRecord::Migration[5.1]
  def change
    rename_column :posts, :private_flag, :published
  end
end
