import * as PostAPIUtil from '../util/post_api_util';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const RESET_POSTS = 'RESET_POSTS';
export const RESET_POST_ERRORS = 'RESET_POST_ERRORS';

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts: posts
});

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post: post
});

export const resetPosts = () => ({
    type: RESET_POSTS,
})

export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors: errors
})

export const resetPostErrors = () => ({
    type: RESET_POST_ERRORS
})

export const receiveUserPosts = (posts) => ({
    type: RECEIVE_USER_POSTS,
    posts: posts
})

export const fetchPosts = (city_id) => {
    return function (dispatch) {
        PostAPIUtil.fetchPosts(city_id).then((all_posts) =>  dispatch(receivePosts(all_posts)))
    }
};

export const fetchUserPosts = (user_id) => {
    return function (dispatch) {
        PostAPIUtil.fetchUserPosts(user_id).then((user_posts) => dispatch(receiveUserPosts(user_posts)))
    }
}

export const createPost = (post) => {
    return function (dispatch) {
        PostAPIUtil.createPost(post).then( (created_post) => (
            dispatch(receivePost(created_post))
        ), err => (
            dispatch(receivePostErrors(err.responseJSON))
        ))
    }
};