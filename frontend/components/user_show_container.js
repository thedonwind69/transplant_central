import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../actions/users_actions';
import {fetchUserPosts} from '../actions/post_actions';

const mapStateToProps = (state) => ({
   users: state.entities.users,
   userPosts: state.entities.userPosts
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id)),
    fetchUserPosts: (user_id) => dispatch(fetchUserPosts(user_id))
});

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);

export default UserShowContainer;