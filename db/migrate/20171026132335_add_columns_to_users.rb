class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, default: username
    add_column :users, :last_name, :string
    add_column :users, :country, :string
    add_column :users, :bio, :text
    add_column :users, :website, :string
    add_attachment :users, :image

  end
end
