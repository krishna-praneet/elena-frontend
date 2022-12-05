import { FormControl, Grid, Input, InputLabel, Button, Typography, Switch } from '@material-ui/core';
import { Component } from 'react';
import { getLatAndLong } from '../../Functions/LocationServices'
import './UserInput.css'

export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          componentIsLoading: false,
          from: 'Washington,DC',
          to: 'Boston,MA',
          accuracy: 20,
          elevation: 2,
          distance: 10,
          toggle: false,
          year: new Date().getFullYear(),
          path: []
        }
    }

    async findPath() {
        console.log("Computing path for", this.state.from,this.state.to);
        const startLocation = await getLatAndLong(this.state.from);
        const endLocation = await getLatAndLong(this.state.to);
        console.log("start: ", startLocation, "end: " , endLocation);
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
                <Button
                onClick={() => {this.findPath()}}
                variant="contained"
                color="primary"
                aria-label="Fetch data for start and end address"
                className='form-field search-button'>
                    Search
                </Button>
                <div className='output'>
                    Elevation: {this.state.elevation} ft
                </div>
                <div className='output'>
                    Distance: {this.state.distance} miles
                </div>
                <div className='copyright'>
                    DEVil's Advocates &copy; {this.state.year}
                </div>
            </div>
        );
    }
}
