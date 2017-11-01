@tracks.each do |tr|
  json.set! tr.id do
    json.extract! tr, :id, :title, :artist_name, :description, :genre, :owner_id

    json.trackUrl tr.track.url
    json.imageUrl tr.image.url

  end
end
