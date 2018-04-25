json.extract! comment, :id, :content, :rating, :status, :created_at, :updated_at
json.url comment_url(comment, format: :json)
