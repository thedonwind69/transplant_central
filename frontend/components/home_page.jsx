import React from 'react';
import CityIndexItem from './city_index_item';
import LazyLoad from 'react-lazyload';
import GoogleMapView from './google_map_view';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageType: "Default"
        }
    }

    componentDidMount () {
        this.props.fetchCities();
    }

    switchTypeButton () {
        if (this.state.pageType === "Default") {
            return <button onClick={this.handleChangePageType.bind(this)}>Switch to Map View</button>
        } else {
            return <button onClick={this.handleChangePageType.bind(this)}>Switch to Default View</button>
        }
    }

    handleChangePageType () {
        if (this.state.pageType === "Default") {
            this.setState({
                pageType: "Map"
            })
        } else {
            this.setState({
                pageType: "Default"
            })
        }
    }

    whatToRender () {
        const all_cities = this.props.cities.map((single_city, index) => {
            return (
                <CityIndexItem key={index} city={single_city} />
            )
        });
        var {pageType} = this.state;

        if (pageType === "Default") {
            return (
                <div class="home-page-container">
                        <div class="city-item-row">
                            {all_cities.slice(0, 5)}
                        </div>
                            
                        <div class="city-item-row">
                            {all_cities.slice(5, 10)}
                        </div>

                        <div class="city-item-row">
                            {all_cities.slice(10, 15)}
                        </div>

                        <div class="city-item-row">
                            {all_cities.slice(15, 20)}
                        </div>

                    </div>
            )
        } else {
            return <GoogleMapView cities={this.props.cities}/>
        }
    }

    render () {
           return (
                <LazyLoad height={200}>
                    <div>
                        {this.switchTypeButton()}
                    </div>
                    <div>
                        {this.whatToRender()}
                    </div>
                </LazyLoad> 
            )
    }

}

export default HomePage;