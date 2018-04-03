import React from 'react';
import ReactDOM from 'react-dom';
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
    
    userShowLink () {
        const {post} = this.props;
        return (
            <Link to={`/users/${post.user_id}`}>{post.user_id}</Link>
        )
    }

    componentDidMount () {
        const {post} = this.props;
        const postRatingList = ReactDOM.findDOMNode(this.refs.postRating);
        for (let i=0; i<post.rating; i++) {
            postRatingList.children[i].classList.add('fa');
            postRatingList.children[i].classList.add('fa-star');
        }
    }
   
    render () {

        const {post} = this.props;

        return (
                <div class='post-index-item'>
                    <p class='post-stamp'>Posted: {post.created_at}</p>
                    <p class='post-stamp'>Posted By: {this.userShowLink()}</p>

                    <ul class='post-star-rating-list' ref='postRating'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <h1 class='post-index-item-subject'>{post.subject}</h1>
                    <div class='post-index-item-content'>
                        <p>{post.content}</p>
                    </div>
                </div>
        )
    }

}

export default PostIndexItem;