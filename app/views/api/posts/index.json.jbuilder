# json.array! @all_posts, :id, :subject, :content, :rating, :user_id, :city_id, :category_id, :created_at
json.array! @all_posts do |post|
    json.id post.id
    json.subject post.subject
    json.content post.content
    json.rating post.rating
    json.user_id post.user_id
    json.city_id post.city_id
    json.category_id post.category_id
    json.created_at post.created_at
    json.username post.user.username
end