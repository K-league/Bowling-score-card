import React, { Component } from "react";

class Frame extends Component {
    componentDidMount() {
        // console.log(this.props)
        // this.props.onChangeEvent is bound to Table.js
    }
    render() {
        let second = <div>Strike!</div>
        if(this.props.first !== 10) {
            second = <input name="second" type="text" size="2" frameid={this.props.frameId} value={this.props.second} onChange={this.props.onChangeEvent} />;
        }
        return (
            <table id="frame-{this.props.frameId}">
                <thead>
                    <tr><th>Frame #: {this.props.frameId}</th></tr>
                </thead>
               <tbody>
                   <tr>
                       <td>
                           {/* text input one */}
                           <input name="first" type="text" size="2" frameid={this.props.frameId} value={this.props.first} onChange={this.props.onChangeEvent} />
                       </td>
                       <td>
                           {/* text input two */}
                           {second}
                       </td>
                   </tr>
                   <tr>
                       {/* running total */}
                       <td>
                        <input type="number" value={this.props.runningTotal} size="3" readOnly/>
                       </td>
                   </tr>
               </tbody>
            </table>
        )
    }
}
export default Frame;