
json.track do
  json.extract! track, :id, :title, :artist_name, :genre, :description

  json.owner track.owner.username
  json.ownerId track.owner.id
  json.ownerImage track.owner.image.url
  json.trackUrl track.track.url
  json.imageUrl track.image.url
  json.commentIds track.comment_ids
  json.time time_ago_in_words(track.created_at)
end

json.comments do
  track.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment.json.jbuilder', comment: comment
    end
  end

end
