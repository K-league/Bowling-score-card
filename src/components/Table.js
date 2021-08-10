import React, { Component } from "react";
import Frame from "./Frame";

class Table extends Component {
    //frames
    constructor(props) {
        super(props);
        // todo: create the state with an array that has 10 objects
        // each object contains the state for one frame
        let frames = [];
        for (var i = 0; i < 10; i++) {
            frames.push({first: 0, second: 0, runningTotal:0})
        }
        this.state = {frames};
        // todo: bind update totals to this so the frame children can update table's state
        this.updateTotals = this.updateTotals.bind(this);
    }
    
    componentDidMount() {
        console.log(this.props);
    }

    updateTotals(event) {
        let frames = this.state.frames;
        let rawValue = event.target.value;
        // get frame id, input value, and name of the shot from the input name
        // clean up value by checking if it's empty, not a number (NaN), and parsing it
        if (isNaN(rawValue)) {
            if(rawValue.toLowerCase() === "x"){
                rawValue = 10;
            }
            //if for / spare
        } else if (rawValue !== ""){
            rawValue = parseInt(rawValue);
        }
        // retrieve all frames from state, use frame id to alter state for frame 
        let value = rawValue;
        let frame = parseInt(event.target.attributes['frameId'].value);
        let shot = event.target.name;
        frames[frame][shot] = value;
        console.log("update successful");
        
        // update state of table with setState()
        this.setState({ updateTotals: value}, () => {
            console.log(this.state.updateTotals, 'updateTotals1');
        });
        
        //calculate running totals using all the frames
        frames[frame][shot] = value;
        console.log("updated");

        
    }
    render() {
        console.log("render table");
        console.log(this.state.frames);
        let frames = [];
        for(var i=1; i<10; i++) {
            frames.push(<Frame frameId={i} key={i} onChangeEvent={this.updateTotals} {...this.state.frames[i]}/>)
        }
        frames.push(<Frame frameId={10} final={true} key={10} />);
        return frames;
    
    };
}

export default Table;