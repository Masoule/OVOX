class RemoveIndexFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_index :tracks, [:owner_id]
  end
end
