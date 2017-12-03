json.extract! comment, :id, :body

json.time time_ago_in_words(comment.created_at)
json.user comment.commenter.username
json.userId comment.commenter.id
json.image comment.commenter.image.url
json.trackId comment.track_id
