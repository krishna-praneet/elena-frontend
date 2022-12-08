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

    onPath(path) {
        this.setState(() => {
            return {path: path};
        });
    }

    onInitial(start,end) {
        this.setState(() => {
            let coordinates = {
                start: start,
                end: end
            };
            return {coordinates: coordinates};
        });
    }

    render() {
        return (
            <div>
                <div className='left-div'>
                    <UserInput onPath={this.onPath} onInitial={this.onInitial}></UserInput>
                </div>
                <div className='right-div'>
                    <MapView path={this.state.path} coordinates={this.state.coordinates}></MapView>
                </div>
            </div>
        );
    }
}
