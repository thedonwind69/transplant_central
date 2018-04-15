json.array! @all_cities do |city|

    totalRating = 0
    city.posts.each do |post|
        totalRating += post.rating
    end

    json.id city.id
    json.name city.name
    json.description city.description
    json.number_of_posts city.posts.length
    json.totalRating totalRating
end