json.extract! track, :id, :title, :artist_name, :genre, :description, :owner_id

json.track asset_path(track.track.url)
json.track asset_path(track.image.url)
