json.extract! comment, :id, :body

json.time comment.created_at
json.user comment.commenter.username
json.image comment.commenter.image.url
