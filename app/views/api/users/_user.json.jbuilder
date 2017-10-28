json.user do
  json.extract! user, :id, :username, :first_name, :last_name, :country, :bio, :website, :track_ids
  json.image user.image.url
end

# json.tracks do
#   json.array! user.tracks, partial: 'api/tracks/track', as: :track
# end
