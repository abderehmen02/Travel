import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Box , styled } from '@mui/material'
import NavBar from '../navBar'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapPage = styled(Box)(({theme})=>({
    backgroundColor : theme.palette.primary.main,
}))

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <MapPage height="100vh" width="100vw">
          <NavBar/>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </MapPage>
    );
  }
}

export default SimpleMap;

