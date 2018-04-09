import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';
import categoriesReducer from './categories_reducer';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import postErrorsReducer from './post_errors_reducer';

const entitiesReducer = combineReducers({
    cities: citiesReducer,
    categories: categoriesReducer,
    posts: postsReducer,
    users: usersReducer,
    postErrors: postErrorsReducer,
})

export default entitiesReducer;