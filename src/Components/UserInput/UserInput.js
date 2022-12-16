import { FormControl, Input, InputLabel, Button, Typography, Switch } from '@material-ui/core';
import { Component } from 'react';
import { getMaxPath, getMinPath, getLatAndLong } from '../../Functions/LocationServices'
import './UserInput.css'

export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          componentIsLoading: false,
          from: props.from ? props.from : '',
          to: props.to ? props.to : '',
          accuracy: 10,
          elevation: 0,
          distance: 0,
          toggle: false,
          year: new Date().getFullYear(),
          path: [],
          isError: false
        }
        this.findPath = this.findPath.bind(this);
    }

    async findPath() {
        this.setState(() => {
            return {isError: false};
        });
        
        if(this.state.from==='' || this.state.to==='') {
            this.setState(() => {
                return {isError: true};
            });
            return;
        }
        
        const start = await getLatAndLong(this.state.from);
        const end = await getLatAndLong(this.state.to);
        this.props.onInitial(start,end);
        if(this.state.toggle) {
            const path = await getMaxPath(this.state.from, this.state.to, this.state.accuracy);
            console.log(path.data.path)
            this.setState(() => {
                return {path: path.data.path};
            });
            this.setState(() => {
                return {elevation: path.data.elevationGain};
            });
            this.setState(() => {
                return {distance: path.data.distance};
            });
            this.props.onPath(path.data.path);
        } else {
            const path = await getMinPath(this.state.from, this.state.to, this.state.accuracy);
            console.log(path.data.path)
            this.setState(() => {
                return {path: path.data.path};
            });
            this.setState(() => {
                return {elevation: path.data.elevationGain};
            });
            this.setState(() => {
                return {distance: path.data.distance};
            });
            this.props.onPath(path.data.path);
        }
    }
    
    render() {
        return (
            <div className='input-form'>
                <div className='form-title'>DEVils' Elevation Navigation System</div>
                <FormControl fullWidth className='form-field'>
                    <InputLabel className='input-label'>From</InputLabel>
                    <Input
                    multiline
                    value={this.state.from}
                    aria-describedby="starting-address"
                    onChange={(e) => this.setState({ from: e.target.value })}
                    className="input-value"
                    inputProps={{ "data-testid": "from" }}
                    />
                </FormControl>
                <FormControl fullWidth className='form-field'>
                    <InputLabel className='input-label'>To</InputLabel>
                    <Input
                    multiline
                    value={this.state.to}
                    aria-describedby="ending-address"
                    onChange={(e) => this.setState({ to: e.target.value })}
                    className="input-value"
                    inputProps={{ "data-testid": "to" }}
                    />
                </FormControl>
                <FormControl fullWidth className='form-field'>
                    <InputLabel className='input-label'>Elevation Preference (in %) </InputLabel>
                    <Input
                    type="number"
                    value={this.state.accuracy}
                    aria-describedby='elevation-preference'
                    onChange={(e) => this.setState({ accuracy: e.target.value })}
                    className="input-value"
                    inputProps={{ "data-testid": "elevation-preference" }}
                    />
                </FormControl>
                <Typography className='input-label'>{this.state.toggle ? 'Maximize Elevation' : 'Minimize Elevation'}</Typography>
                <Switch
                    onChange={(e) => this.setState({ toggle: e.target.checked })}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                ></Switch>
                <br />
                <br />
                {this.state.isError && (<div className='error'>
                    Please enter valid input
                </div>)}
                <Button
                onClick={() => {this.findPath()}}
                variant="contained"
                color="primary"
                aria-label="Fetch data for start and end address"
                className='form-field search-button'>
                    Search
                </Button>
                <div className='output'>
                    Elevation Gain: {this.state.elevation} metres
                </div>
                <div className='output'>
                    Distance: {this.state.distance} metres
                </div>
                <div className='copyright'>
                    DEVil's Advocates &copy; {this.state.year}
                </div>
            </div>
        );
    }
}
