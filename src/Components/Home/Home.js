import { Component } from 'react';
import './Home.css';
import UserInput from '../UserInput/UserInput';
import MapView from '../MapView/MapView';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='left-div'>
                    <UserInput></UserInput>
                </div>
                <div className='right-div'>
                  <MapView></MapView>
                </div>
            </div>
        );
    }
}
