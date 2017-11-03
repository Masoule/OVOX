@tracks.each do |tr|
  json.set! tr.id do
    json.extract! tr, :id, :title, :artist_name, :owner, :description, :genre, :owner_id

    json.trackUrl tr.track.url
    json.imageUrl tr.image.url
    json.owner tr.owner.username
    json.ownerImage tr.owner.image.url
    json.commentIds tr.comment_ids
    json.time tr.created_at

  end
end
