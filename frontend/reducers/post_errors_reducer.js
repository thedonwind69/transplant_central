import {RECEIVE_POST_ERRORS} from '../actions/post_actions';
import merge from 'lodash/merge';

const postErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_POST_ERRORS:
            return [`${action.errors}`];
        default:
            return state;
    }
}

export default postErrorsReducer;