json.extract! track, :id, :title, :artist_name, :genre, :description

json.owner track.owner.username
json.trackUrl track.track.url
json.imageUrl track.image.url


json.comments do
  json.array! track.comments, partial: 'api/comments/comment.json.jbuilder', as: :comment
end
