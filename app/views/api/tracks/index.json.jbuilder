@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :artist_name, :description, :genre, :owner_id,

    json.track track.track.url
    json.image track.image.url
  end
end




#     json.image_url image_path(poke.image_url)
