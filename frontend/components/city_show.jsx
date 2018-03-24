import React from 'react';

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

class CityShow extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount () {
        const { fetchCity, fetchCategories, currentCity } = this.props;
        fetchCity(this.props.match.params.city_id);
    }

    componentWillReceiveProps (newProps) {
        const { fetchCity } = this.props;
        if (newProps.match.params.city_id !== this.props.match.params.city_id) {
            fetchCity(newProps.match.params.city_id);
        }
    }

    profilePicClass () {
        const { currentCity } = this.props;
        return currentCity.name.split(' ').join('') + "Page"
    }

    render () {  
        const { currentCity } = this.props;
      
            return (
                <div>
                    <div class="city-profile-header">
                        <h1>{currentCity.name}</h1>
                    </div>
                   <div class={`city-profile-pic ${this.profilePicClass()}`}>
                    </div>
                    <br />
                    <div>
                        <CityPostFormContainer />
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