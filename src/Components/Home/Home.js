import { Component } from 'react';
import './Home.css';
import UserInput from '../UserInput/UserInput';
import MapView from '../MapView/MapView';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          path: [],
          coordinates: {}
        }
        this.onPath = this.onPath.bind(this);
        this.onInitial = this.onInitial.bind(this);
    }

    /**
     * Helps send path data from User Input component to Map View component
     * @param {*} path - set of coordinates of path 
     */
    onPath(path) {
        console.log("Path received in Home Component from UserInput component")
        this.setState(() => {
            return {path: path};
        });
    }

    /**
     * Helps send address data from User Input component to Map View component
     * @param {*} start - starting address as latitude and longitude
     * @param {*} end - ending address as latidue and longitude
     */
    onInitial(start,end) {
        console.log("Initial coordinates received in Home Component from UserInput component")
        this.setState(() => {
            let coordinates = {
                start: start,
                end: end
            };
            return {coordinates: coordinates};
        });
    }

    /**
     * Renders UserInput and MapView components to the user
     * @returns 
     */
    render() {
        return (
            <div>
                <div className='left-div'>
                    <UserInput onPath={this.onPath} onInitial={this.onInitial} data-testid="user-input"></UserInput>
                </div>
                <div className='right-div'>
                    <MapView path={this.state.path} coordinates={this.state.coordinates} data-testid="map-view"></MapView>
                </div>
            </div>
        );
    }
}
