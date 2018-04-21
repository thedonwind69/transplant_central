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
            name: mostReviewedCity,
            number_of_posts: highestNumberOfPosts
        };
        return mostReviewedCityObject
    }

    mostReviewedCityElement() {
        let mostReviewedCity = null;
        if (this.mostReviewedCity().name) {
            mostReviewedCity = this.mostReviewedCity().name.split(' ').join('');
                return (
                    <div>
                        <h1 class='highlight-info'>{this.mostReviewedCity().number_of_posts} Reviews</h1>
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
            name: highestRatedCity,
            rating: highestRating
        }
        return highestRatedCityObject;
    }

    highestRatedCityElement () {
        let highestRatedCityClass = null;
        if (this.highestRatedCity().name) {
            highestRatedCityClass = this.highestRatedCity().name.split(' ').join('');
            let highestRating = this.highestRatedCity().rating.toFixed(1);
            return (
                <div>
                    <p class='highlight-info'>{highestRating} Stars</p>
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

    lowestRatedCity () {
        const {cities} = this.props;
        const citiesWithRating = [];
        cities.forEach((city) => {
            if (city.totalRating > 0) {
                citiesWithRating.push(city);
            }
        })
        if (citiesWithRating.length >= 2) {
            let lowestRating = (citiesWithRating[0].totalRating / citiesWithRating[0].number_of_posts);
            let lowestRatedCity = citiesWithRating[0].name;
            let lowestRatedCityId = citiesWithRating[0].id;
            citiesWithRating.forEach((city) => {
                if ((city.totalRating / city.number_of_posts) < lowestRating) {
                    lowestRating = city.totalRating / city.number_of_posts;
                    lowestRatedCity = city.name;
                    lowestRatedCityId = city.id;
                }
            })
            const lowestRatedCityObject = {
                id: lowestRatedCityId,
                name: lowestRatedCity,
                rating: lowestRating
            };
            return lowestRatedCityObject;
        }
    }

   lowestRatedCityElement () {
        let lowestRatedCityClass = null;
        if (this.lowestRatedCity()) {
            lowestRatedCityClass = this.lowestRatedCity().name.split(' ').join('');
            let lowestRating = this.lowestRatedCity().rating.toFixed(1);
            return (
                <div>
                    <p class='highlight-info'>{lowestRating} Stars</p>
                    <Link to={`/cities/${this.lowestRatedCity().id}`}>
                        <div class={`single-highlight ${lowestRatedCityClass}`}>
                        </div>
                    </Link>
                </div>
            )
        } else {
            return <div>No Lowest Rated City Yet!</div>
        }
    }

    render () {
        return (
            <div class='highlights-background'>
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
                            <h1>Lowest Rated City</h1>
                            {this.lowestRatedCityElement()}
                        </div>

                </div>

            </div>
        )
    }

}

export default withRouter(Highlights);