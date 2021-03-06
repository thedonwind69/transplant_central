import React, { Component } from 'react'
import {withRouter } from 'react-router-dom';

export class GoogleMapView extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount () {
        var {cities} = this.props;
        const mapDOMNode = this.refs.map;
        const mapOptions = {
          center: {lat: 39.45942287740333, lng: -97.38274119535001}, 
          zoom: 4.5
        }; 
        this.map = new google.maps.Map(mapDOMNode, mapOptions);

        cities.forEach((city) => {
            const CityMarker = new google.maps.Marker({
                position: {lat: city.lat, lng: city.lng},
                map: this.map,
                title: city.name,
            })
            CityMarker.addListener('click', () => {
                this.props.history.push(`/cities/${city.id}`);
            })

            const contentString =
                `<div>` +
                    "<h1>" + city.name + "</h1>"
                '</div>'
               
                ;

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
            });

            CityMarker.addListener("mouseover", () => {
                infowindow.open(this.map, CityMarker);
            });
            CityMarker.addListener("mouseout", () => {
                infowindow.close()
            });

        })

      }


    render() {
        return (
            <div id='map-container' ref='map'>
                
            </div>
        )
    }
}

export default withRouter(GoogleMapView)
