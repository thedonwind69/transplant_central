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

class CityShow extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            profilePicIndex: 0
        }
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

    profilePicClass () {
        const { currentCity } = this.props;
        return currentCity.name.split(' ').join('') + "Page" + this.state.profilePicIndex;
    }

    changePicLeft (event) {
        event.preventDefault();
        this.setState({
            profilePicIndex: this.state.profilePicIndex -= 1
        })
        if (this.state.profilePicIndex < 0) {
            this.setState({
                profilePicIndex: 2
            })
        }
    }

    changePicRight (event) {
        event.preventDefault();
        this.setState({
            profilePicIndex: this.state.profilePicIndex += 1
        })
        if (this.state.profilePicIndex > 2) {
            this.setState({
                profilePicIndex: 0
            })
        }
    }

    render () {  
        const { currentCity } = this.props;
      
            return (
                <div class="city-main-content">
        
                    <div class='city-profile-pic-container'>
                        <div ref='cityPic' class={`city-profile-pic ${this.profilePicClass()}`}>
                            <h1 class='city-profile-header2'>{currentCity.name}</h1>
                            <i onClick={this.changePicLeft.bind(this)} class="left city-pic-button city-pic-button-left">{`<`}</i>
                            <i onClick={this.changePicRight.bind(this)} class="right city-pic-button city-pic-button-right">{`>`}</i>
                            <div class='clearfix'></div>
                        </div>
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