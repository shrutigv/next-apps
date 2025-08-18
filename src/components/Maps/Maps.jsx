import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
const Maps = () => {
    
  return (
    <div id="map">
      <h2>Locate yourself</h2>
            <GoogleMapReact
        bootstrapURLKeys={{ key:  /* YOUR KEY HERE */ 'AIzaSyD-4b1k2Z3a5c6d7e8f9g0h1i2j3k4l5m6n' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default Maps