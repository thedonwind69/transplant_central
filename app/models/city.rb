class City < ApplicationRecord

    has_many :posts
    
    def average_rating 
        return nil if self.posts.length == 0
        totalRating = 0
        self.posts.each do |post| 
            totalRating += post.rating
        end
        
        return (totalRating / self.posts.length).to_f
    end

end
