import React, { Component } from 'react'

export class GoogleMapView extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        const mapDOMNode = this.refs.map;
        const mapOptions = {
          center: {lat: 39.45942287740333, lng: -97.38274119535001}, 
          zoom: 4.5
        }; 
        this.map = new google.maps.Map(mapDOMNode, mapOptions);
      }


    render() {
        return (
            <div id='map-container' ref='map'>
                
            </div>
        )
    }
}

export default GoogleMapView
