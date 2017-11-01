class Comment < ApplicationRecord
  validates :commenter, :track, presence: true

  belongs_to :commenter,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :track,


end
