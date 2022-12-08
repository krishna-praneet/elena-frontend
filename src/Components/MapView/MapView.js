import './MapView.css';
import React, { Component } from 'react';
import ReactMapGL, { Marker, ScaleControl } from 'react-map-gl';
import PolylineOverlay from '../PolylineOverlay/PolylineOverlay';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class MapView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        path: [],
        coordinates: {},
        viewport: {
            width: '74vw',
            height: '100vh',
            latitude: 42.373222,
            longitude: -72.519852,
            zoom: 12,
        },
      };
    }

    render() {
      const { viewport } = this.state;
  
      return (
        <>
          <ReactMapGL
            id="map"
            {...viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_MAPTILLER_API_KEY}`}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          >
            <ScaleControl maxWidth={100} unit={'imperial'} />
            {this.props.coordinates.start && this.props.coordinates.end && 
              <>
                <Marker
                        key={1}
                        latitude={this.props.coordinates.start[0]}
                        longitude={this.props.coordinates.start[1]}
                        anchor="bottom"
                >
                  <LocationOnIcon color="error" /> 
                </Marker>
                <Marker
                        key={2}
                        latitude={this.props.coordinates.end[0]}
                        longitude={this.props.coordinates.end[1]}
                        anchor="bottom"
                >
                  <LocationOnIcon color="error" /> 
                </Marker>
              </> 
            } 
            {this.props.path.length>0 && this.props.path.map(
              (element) => (
                <Marker
                    key={element.id}
                    latitude={element.data.coordinates[0]}
                    longitude={element.data.coordinates[1]}
                    anchor="bottom"
                >
                  <div className="middle-markers"></div>
                </Marker>
              )
            )}
            {this.props.path.length>0 && this.props.path.map(
              (element, index) =>
                index !== 0 && (
                  <PolylineOverlay
                    color={'green'}
                    key={index}
                    points={[
                      [
                        this.props.path[index-1].data.coordinates[1],
                        this.props.path[index-1].data.coordinates[0],
                      ],
                      [
                        this.props.path[index].data.coordinates[1],
                        this.props.path[index].data.coordinates[0],
                      ],
                    ]}
                  />
                )
            )}
          </ReactMapGL>
        </>
      );
    }
  }
  