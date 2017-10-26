class Track < ApplicationRecord
  validates :title, :owner_id, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :track
  validates_attachment_content_type :track, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]

  belongs_to :owner;
  foreign_key: :user_id,
  class_name: 'User'

  after_initialize :ensure_image
  after_initialize :ensure_artist


  private

  def ensure_image
    if !self.image
      self.image = owner.image
    end

    self.save!
  end

  def ensure_artist
    if !self.artist_name
      self.artist_name = self.owner.username
    end

    self.save!
  end


end
