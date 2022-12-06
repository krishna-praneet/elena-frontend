import './MapView.css';
import React, { Component } from 'react';
import ReactMapGL, { ScaleControl } from 'react-map-gl';

export default class MapView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        viewport: {
            width: '75vw',
            height: '100vh',
            latitude: 42.373222,
            longitude: -72.519852,
            zoom: 12,
        },
      };
      this.updateIndex = this.updateIndex.bind(this);
    }
  
    getColor(start, end) {
      const diff = start - end;
      if (diff > 5) {
        return 'blue';
      } else if (diff > 0) {
        return 'green';
      } else if (diff > -3) {
        return 'yellow';
      } else if (diff>-6) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  
    updateIndex(index){
      this.setState({currentIndex: index});
    }
  
    render() {
      const { viewport } = this.state;
  
      return (
        <ReactMapGL
          id="map"
          {...viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_MAPTILLER_API_KEY}`}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        >
          <ScaleControl maxWidth={100} unit={'imperial'} />
        </ReactMapGL>
      );
    }
  }
  