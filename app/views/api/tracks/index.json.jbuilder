@tracks.each do |tr|
  json.set! tr.id do
    json.extract! tr, :id, :title, :artist_name, :description, :genre, :owner_id

    json.track tr.track.url
    json.image tr.image.url

  end
end
