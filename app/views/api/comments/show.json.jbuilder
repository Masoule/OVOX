json.extract! comment, :id, :body

json.time comment.created_at
json.commenter comment.commenter.username
json.commenterImage comment.commenter.image.url
json.tack comment.track
