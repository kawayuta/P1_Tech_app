class RenameEducationColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :education, :college
  end
end
