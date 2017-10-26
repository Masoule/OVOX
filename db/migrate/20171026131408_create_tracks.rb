class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.string :artist_name
      t.attachment :image
      t.attachment :track
      t.text :description
      t.string :genre
      t.integer :owner_id, null:false

      t.timestamps
    end
    add_index :tracks, :owner_id, unique: true
  end
end
