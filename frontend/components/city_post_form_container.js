import {connect} from 'react-redux';
import CityPostForm from './city_post_form';
import {fetchCity} from '../actions/city_actions';
import {createPost} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    postErrors: state.entities.postErrors,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    createPost: (post) => dispatch(createPost(post))
});

const CityPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(CityPostForm);

export default CityPostFormContainer;