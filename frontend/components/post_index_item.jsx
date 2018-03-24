import React from 'react';


class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        const {post, currentCategoryId} = this.props;

        return (
     
                <div class='post-index-item'>
                    <p class='post-stamp'>Posted: {post.created_at}</p>
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