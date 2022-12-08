import { Component } from 'react';
import './Home.css';
import UserInput from '../UserInput/UserInput';
import MapView from '../MapView/MapView';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          path: []
        }
        this.onPath = this.onPath.bind(this);
    }

    onPath(path) {
        console.log("in home",path)
        this.setState((state) => {
            return {path: path}
        });
        console.log("after setting",this.state.path)
    }

    render() {
        return (
            <div>
                <div className='left-div'>
                    <UserInput onPath={this.onPath}></UserInput>
                </div>
                <div className='right-div'>
                    <MapView path={this.state.path}></MapView>
                </div>
            </div>
        );
    }
}
