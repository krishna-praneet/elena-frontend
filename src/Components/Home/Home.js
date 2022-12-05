import { Component } from 'react';
import './Home.css';
import UserInput from '../UserInput/UserInput';
import samplemap from './map-sample.png'

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        componentIsLoading: false,
        from: 'CICS 150',
        to: 'The Spoke',
        accuracy: 20,
        toggle: false,
        path: []
      }
    }
    render() {
        return (
            <div>
                <div className='left-div'>
                    <UserInput></UserInput>
                </div>
                <div className='right-div'>
                  <img src={samplemap} alt="sample-map" style={{ maxWidth: "100%" }}></img>
                </div>
            </div>
        );
    }
}
