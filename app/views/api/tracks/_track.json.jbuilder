json.extract! track, :id, :title, :artist_name, :genre, :description

json.owner track.owner.username
json.track track.track.url
json.image track.image.url
