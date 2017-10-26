class AddAttachmentTrackImgToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :track_img
    end
  end

  def self.down
    remove_attachment :tracks, :track_img
  end
end
