import {RECEIVE_POSTS, RECEIVE_POST, RESET_POSTS, UPDATE_WITH_DELETED_POST} from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            const newPost = {[action.post.id]: action.post};
            return merge({}, state, newPost);
        case RESET_POSTS:
            return {};
        case UPDATE_WITH_DELETED_POST:
            const stateArray = Object.keys(state).map((key) => state[key]);
            const newStateWithoutDeletedPost = stateArray.filter((post) => (
                post.id !== action.post.id
            ))
            return newStateWithoutDeletedPost;
        default:
            return state;
    }
};

export default postsReducer