json.extract! track, :id, :title, :artist_name, :genre, :description

json.owner @track.owner.username
json.track asset_path(track.track.url)
json.image asset_path(track.image.url)
