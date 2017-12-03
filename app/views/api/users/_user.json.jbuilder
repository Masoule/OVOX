
json.extract! user, :id, :username, :first_name, :last_name, :country, :bio, :website, :track_ids
json.imageUrl user.image.url
# json.time time_ago_in_words(user.created_at)


json.tracks do
  json.array! user.tracks, partial: 'api/tracks/track.json.jbuilder', as: :track
end
