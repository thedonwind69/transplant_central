import {RECEIVE_POST_ERRORS} from '../actions/post_actions';
import merge from 'lodash/merge';

const nullPosts = Object.freeze({
    errors: []
  });

const postErrorsReducer = (state = nullPosts, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POST_ERRORS:
            const errors = 'Invalid Post';
            return merge({}, state, {errors: [`${errors}`]} )
        default:
            return state;
    }
}

export default postErrorsReducer;