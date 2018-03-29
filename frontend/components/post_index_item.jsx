import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    postRatingStars () {
        const {post} = this.props;
        let totalStars = null;
        for (let i=0; i <= post.rating; i++) {
           totalStars += React.createElement({type:'span', class: "fa fa-star"});
        }
        return totalStars;
    }

    userShowLink () {
        const {post} = this.props;
        return (
            <Link to={`/users/${post.user_id}`}>{post.user_id}</Link>
        )
    }

    render () {

        const {post, currentCategoryId} = this.props;

        return (
     
                <div class='post-index-item'>
                    <p class='post-stamp'>Posted: {post.created_at}</p>
                    <p class='post-stamp'>Posted By: {this.userShowLink()}</p>
                    <h1 class='post-index-item-rating'>{post.rating} Stars</h1>
                    <h1 class='post-index-item-subject'>{post.subject}</h1>
                    <div class='post-index-item-content'>
                        <p>{post.content}</p>
                    </div>
                </div>
        
        )
    }



}




export default PostIndexItem;