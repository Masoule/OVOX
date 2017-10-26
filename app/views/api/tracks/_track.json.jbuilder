json.extract! track, :id, :title, :artist_name, :genre, :description,

json.track asset_path(track.track.url)
json.track asset_path(track.image.url)
