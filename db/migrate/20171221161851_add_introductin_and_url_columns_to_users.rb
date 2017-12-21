class AddIntroductinAndUrlColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :introduction, :text
    add_column :users, :url_1, :string
    add_column :users, :url_2, :string
    add_column :users, :url_3, :string
  end
end
