import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
library.add(faMapPin)

const AnyReactComponent = ({ icon, text }) => <div><FontAwesomeIcon icon={icon} />{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.310681,
      lng: -82.359533
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbbeKFw9ePG1BO4Om292xKUZJTLhC5plw&callback=myMap' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.310681}
            lng={-82.359533}
            icon={faMapPin}
            text={'Johnson City Family Skate Center'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;