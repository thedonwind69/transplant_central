import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class Highlights extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchCities();
    }

    mostReviewedCity () {
        let highestNumberOfPosts = 0;
        let mostReviewedCity = null;
        let mostReviewedCityId = null;
        this.props.cities.forEach((city) => {
            if (city.number_of_posts > highestNumberOfPosts) {
                highestNumberOfPosts = city.number_of_posts;
                mostReviewedCity = city.name;
                mostReviewedCityId = city.id;
            }
        })
        const mostReviewedCityObject = {
            id: mostReviewedCityId,
            name: mostReviewedCity
        };
        return mostReviewedCityObject
    }

    mostReviewedCityElement() {
        let mostReviewedCity = null;
        if (this.mostReviewedCity().name) {
            mostReviewedCity = this.mostReviewedCity().name.split(' ').join('');
                return (
                    <div>
                        <Link to={`/cities/${this.mostReviewedCity().id}`}>
                            <div class={`single-highlight ${mostReviewedCity}`}>
                            </div>
                        </Link>
                    </div>
                )
        } else {
            return <div>No Most Reviewed City Yet!</div>
        }
    }

    highestRatedCity () {
        let highestRating = 0;
        let highestRatedCity = null;
        let highestRatedCityId = null;
        this.props.cities.forEach((city) => {
            if ( (city.totalRating / city.number_of_posts) > highestRating ) {
                highestRating = (city.totalRating / city.number_of_posts);
                highestRatedCity = city.name;
                highestRatedCityId = city.id
            }
        })
        const highestRatedCityObject = {
            id: highestRatedCityId,
            name: highestRatedCity
        }
        return highestRatedCityObject;
    }

    highestRatedCityElement () {
        let highestRatedCityClass = null;
        if (this.highestRatedCity().name) {
            highestRatedCityClass = this.highestRatedCity().name.split(' ').join('');
            return (
                <div>
                    <Link to={`/cities/${this.highestRatedCity().id}`}>
                        <div class={`single-highlight ${highestRatedCityClass}`}>
                        </div>
                    </Link>
                </div>
            )
        } else {
            return <div>No Highest Rated City Yet!</div>
        }
    }

    render () {
        return (
            <div>
                <h1 class='city-highlights'>City Highlights</h1>
                <div class='clearfix'></div>

                <div class='highlights-container'>
                    
                        <div class='single-highlight-container'>
                            <h1>Most Reviewed City:</h1>
                            {this.mostReviewedCityElement()}
                        </div>

                        <div class='single-highlight-container'>
                            <h1>Highest Rated City:</h1>
                            {this.highestRatedCityElement()}
                        </div>

                        <div class='single-highlight-container'>
                            <h1>something else</h1>
            
                        </div>

                </div>

            </div>
        )
    }

}

export default withRouter(Highlights);