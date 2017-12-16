class ChangeColumnNullToUsers < ActiveRecord::Migration[5.1]
  def up
    change_column_null :users, :username, false
    change_column_null :users, :college, false
    change_column_null :users, :major, false
    change_column_null :users, :graduation_year, false
  end

  def down
    change_column_null :users, :username, true
    change_column_null :users, :college, true
    change_column_null :users, :major, true
    change_column_null :users, :graduation_year, true
  end
end
