@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :artist_name, :description, :genre, :owner_id,

    json.track asset_path(track.track.url)
    json.image asset_path(track.image.url)
  end
end




#     json.image_url image_path(poke.image_url)
