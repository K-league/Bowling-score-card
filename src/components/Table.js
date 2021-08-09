import React, { Component } from "react";
import Frame from "./Frame";

class Table extends Component {
    //frames
    constructor(props) {
        super(props);
        // todo: create the state with an array that has 10 objects
        // each object contains the state for one frame

        // todo: bind update totals to this so the frame children can update table's state
    }
    
    componentDidMount() {
        console.log(this.props);
    }

    updateTotals(event) {
        // get frame id, input value, and name of the shot from the input name
        // clean up value by checking if it's empty, not a number (NaN), and parsing it
        // retrieve all frames from state, use frame id to alter state for frame 
        
        
        // TODO: calculate running totals using all the frames

        // update state of table with setState()
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
    }
}

export default Table;