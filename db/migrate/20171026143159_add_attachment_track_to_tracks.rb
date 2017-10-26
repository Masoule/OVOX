class AddAttachmentTrackToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :track
    end
  end

  def self.down
    remove_attachment :tracks, :track
  end
end
