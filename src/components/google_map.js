import React, { Component } from 'react';

class GoogleMap extends Component {
    //Renders map - lifecycle method called automatically after component is rendered to the screen
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: { 
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    //Specifies where on the screen the map will be rendered
    render() {
        return <div ref="map" />; 
    }
}

export default GoogleMap;