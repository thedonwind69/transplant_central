
import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

import PostIndexItem from './post_index_item';

import CategoryIndexItem from './category_index_item';

class PostsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null,
            currentCategoryId: null
        }
    }
    
    changeCategory (event) {
        event.preventDefault();
        this.setState({
            currentCategory: event.currentTarget.innerHTML,
            currentCategoryId: event.currentTarget.getAttribute('id')
        })
    }

    componentDidMount () {
        this.props.fetchCategories();
        this.props.fetchPosts(this.props.match.params.city_id);
    }

    componentWillReceiveProps (newProps) {
        const { fetchPosts} = this.props;
        if (newProps.match.params.city_id !== this.props.match.params.city_id) {
            fetchPosts(newProps.match.params.city_id);
        }
    }

    all_categories () {
        const {categories, allPosts} = this.props;
        const all_categories = categories.map((category) => {
            return <CategoryIndexItem  changeCategory={this.changeCategory.bind(this)} category={category} posts={allPosts}/>
        });
        return all_categories;
    }

    allThePosts () {
        const {categories, allPosts} = this.props;
        const allThePosts = allPosts.map((post) => {
            let currentCategoryId = this.state.currentCategoryId;
            if (post.category_id === parseInt(currentCategoryId)) {
                return <PostIndexItem post={post} currentCategoryId={this.state.currentCategoryId}  />
            }
        });
        return allThePosts.reverse();
    }

    totalRating () {
        const {allPosts} = this.props;
        let overallRating = 0;
        allPosts.forEach((post) => {
            overallRating += post.rating;
        })
        const finalRating = (overallRating / allPosts.length).toFixed(1);
        if (overallRating / allPosts.length > 0) {
            return <h1>{finalRating} Stars</h1>
        }
    }

    render () {
       
        return (
            <div>

                <div class="total-rating">
                    {this.totalRating()}
                </div>

                <div class='post-tabs'>
                    <ul>
                        {this.all_categories()}
                    </ul>    
                </div>

                <div>
                    {this.allThePosts()}
                </div>

            </div>
        )
    }

}

PostsDisplay.defaultProps = {
    allPosts: null,
    categories: null
}

export default withRouter(PostsDisplay);