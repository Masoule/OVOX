class Track < ApplicationRecord
  validates :title, :artist, :likes, :owner_id, presence: true

  has_attached_file :image, default_url: "track.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :track
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :owner;
  foreign_key: :user_id,
  class_name: 'User'

end
