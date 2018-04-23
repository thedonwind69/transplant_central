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
        const dotList = ReactDOM.findDOMNode(this.refs.dotList);
        for (let i=0; i<=this.state.profilePicIndex; i++) {
            dotList.children[i].classList.add('dot-highlight');
        }
    }

    componentDidUpdate () {
        const dotList = ReactDOM.findDOMNode(this.refs.dotList);
        for (let j=0; j<3; j++) {
            if (j === this.state.profilePicIndex) {
                dotList.children[j].classList.add('dot-highlight');
            }
        }
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
        let cityPic = ReactDOM.findDOMNode(this.refs.cityPic);
        const dotList = ReactDOM.findDOMNode(this.refs.dotList);
        cityPic.classList.toggle('profile-pic-swoosh');
        this.setState({
            profilePicIndex: this.state.profilePicIndex -= 1
        })
        if (this.state.profilePicIndex < 0) {
            this.setState({
                profilePicIndex: 2
            })
        }
        for (let i=0; i<3; i++) {
            dotList.children[i].classList.remove('dot-highlight');
        }
    }

    changePicRight (event) {
        event.preventDefault();
        let cityPic = ReactDOM.findDOMNode(this.refs.cityPic);
        const dotList = ReactDOM.findDOMNode(this.refs.dotList);
        cityPic.classList.toggle('profile-pic-swoosh');
        this.setState({
            profilePicIndex: this.state.profilePicIndex += 1
        })
        if (this.state.profilePicIndex > 2) {
            this.setState({
                profilePicIndex: 0
            })
        }
        for (let i=0; i<3; i++) {
            dotList.children[i].classList.remove('dot-highlight');
        }
    }

    render () {  
        const { currentCity } = this.props;
        console.log('sex');
            return (
                <div class="city-main-content">
        
                    <div ref='cityPic' class='city-profile-pic-container'>
                        <div class={`city-profile-pic ${this.profilePicClass()}`}>
                            <h1 class='city-profile-header2'>{currentCity.name}</h1>

                            <i 
                            onClick={this.changePicRight.bind(this)} 
                            class="city-pic-button city-pic-button-right"
                            >
                            {`>`}
                            </i>

                            <i 
                            onClick={this.changePicLeft.bind(this)} 
                            class="city-pic-button city-pic-button-left"
                            >
                            {`<`}
                            </i>

                            <ul ref='dotList' class='dot-list'>
                                <li class='dot'></li>
                                <li class='dot'></li>
                                <li class='dot'></li>
                            </ul>

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