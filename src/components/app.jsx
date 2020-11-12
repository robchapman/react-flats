import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';
import FlatList from './flatList';
import flats from '../data/flats';

class App extends Component {

  static defaultProps = {
    center: {
      lat: 48.875627,
      lng: 2.344168
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats: flats
    };
  }


  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render () {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA10VJxVJeBMJDtfTYpL4SjloNRvuaifk0" }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
