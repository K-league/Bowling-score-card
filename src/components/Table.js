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
    };
    
    componentDidMount() {
        console.log(this.props);
    };

    updateTotals(event) {
        let frames = this.state.frames.split(' ').map((frame) => [...frame]);
        let rawValue = event.target.value;
        let result = 0;
        for (var i=0; i < frames.length; i++) {
            let current = frames[i];
            
            if(current[0] === 'X' && i < 9) {
                result += 10 + getNextElementScore(frames, i, 2);
            } else if(current.length === 2 && current[1] === '/' && i < 9) {
                result += 10 + getNextElementsScore(frames, i, 1);
              } else if(current.length === 3) {
                result += getThreeRollScore(current);
              } else {
                result += getElementScore(current, 0) + getElementScore(current, 1);
              };
            };
            return result;
        };
        getNextElementScore(frames, index, count){
            let result = getElementScore(frames[index + 1], 0);
            let result2 = getElementScore(frames[index + 1],1);
            
            if (frames[index + 1].length === 1) {
                return count === 1 ? result : result + getElementScore(frames[index + 2], 0);
            };
            return count === 1 ? result : (result2 === 10 && result !== 10 ? result2 : result2 + result );
        };
        // retrieve all frames from state, use frame id to alter state for frame 
        
        let frame = parseInt(event.target.attributes['frameId']);
        let shot = event.target.name;
        frames[frame][shot] = value;
        console.log("update successful");
        getElementScore(frame, index) {
            if (frame[index] === 'X' || frame[index] === '/') {
              return 10;
            }
            return parseInt(frame[index]);
        };
        getThreeRollScore(current) {
            var third = getElementScore(current, 2);
            var second = getElementScore(current, 1);
            var first = getElementScore(current, 0);
          
            return third === 10 && second !== 10 ? third + first : (second === 10 && first !== 10 ? third + second : first + second + third);
        };
        
        // update state of table with setState()
        // this.setState({ updateTotals: value}, () => {
        //     console.log(this.state.updateTotals, 'updateTotals1');
        // });
        
        // //calculate running totals using all the frames
        // frames[frame][shot] = value;
        // console.log("updated");

        
    };
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
};

export default Table;