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
import CityPostFormContainer from './city_post_form_container';
import PostsDisplayContainer from './posts_display_container';
import CityProfilePic from './city_profile_pic';

class CityShow extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount () {
        const { fetchCity } = this.props;
        fetchCity(this.props.match.params.city_id);
    }

    componentWillReceiveProps (newProps) {
        const { fetchCity } = this.props;
        if (newProps.match.params.city_id !== this.props.match.params.city_id) {
            fetchCity(newProps.match.params.city_id);
        }
    }

    render () {  
        const { currentCity } = this.props;
            return (
                <div class="city-main-content">
        
                    <div ref='cityPic' class='city-profile-pic-container'>
                        <CityProfilePic currentCity={currentCity} />
                    </div>
                   
                    <br />

                    <div>
                        <CityPostFormContainer currentCity={currentCity} />
                    </div>
                    <PostsDisplayContainer />
                </div>
            )
    }
}

CityShow.defaultProps = {
    currentCity: {
        id: null,
        name: ''
    },
}

export default withRouter(CityShow);