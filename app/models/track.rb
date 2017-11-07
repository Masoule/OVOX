class Track < ApplicationRecord
  validates :title, :owner_id, presence: true
  
  has_attached_file :image, default_url: "user.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :track
  validates_attachment_content_type :track, content_type: /\Aaudio\/.*\Z/

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: 'User'

  has_many :comments, dependent: :destroy
  has_many :commenters, through: :comments

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes

  after_initialize :ensure_artist


  private

  def ensure_image
    if !self.image
      self.image = self.owner.image
    end
  end

  def ensure_artist
    if !self.artist_name
      self.artist_name = self.owner.username
    end
  end


end
