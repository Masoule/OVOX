class Like < ApplicationRecord
  validates :liker, :track, presence: true
  validates :user_id, uniqueness: {scope: [:track_id]}

  belongs_to :liker,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :track



end
