class Api::PostsController < ApplicationController

    def index
        if @city = City.find(params[:city_id])
          @all_posts = @city.posts
          render :index
        elsif  @user = User.find(params[:user_id])
          @all_posts = @user.posts
          render :index
        end
    end

    def create
      @post = Post.create(post_params)
      if @post.save
        render :show
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    private

    def post_params
      params.require(:post).permit(
        :subject,
        :content,
        :rating,
        :user_id,
        :city_id,
        :category_id,
      )
    end
    
end




# cities/posts_controller
# class Cities::PostsController