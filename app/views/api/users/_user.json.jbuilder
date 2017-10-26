json.extract! user, :id, :username, :first_name, :last_name, :country, :bio, :website, :tracks

json.image asset_path(user.image.url)

json.tracks do
  json.array! @user.tracks, partial: 'api/tracks/track', as: :track
end
# 
# json.tracks do
#   json.array! @user.tracks.id, as: :track
# end
