class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :image, default_url: "user.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  after_initialize :ensure_name

  has_many :tracks, dependent: :destroy,
  foreign_key: :owner_id,
  class_name: 'Track'

  has_many :likes, dependent: :destroy,
  has_many :liked_tracks, through: :likes

  has_many :comments, dependent: :destroy,
  has_many :commented_tracks, through: :comments

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def ensure_name
    if !self.first_name
      self.first_name = self.username
    end

  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

end
