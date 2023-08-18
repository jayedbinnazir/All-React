import React, { Component } from 'react';
import LogMouse from './LogMouse'

class ClassDisplay extends Component {
    constructor(props){
        super(props)
        this.state={
            display:false
        }
    }

    // showDisplay=()=>{

    //     let doesShow=this.state.display;
    //     this.setState({display:!doesShow})
    // }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({display:!this.state.display})} >Toggle</button>
                {
                    this.state.display&&<LogMouse/>
                }
            </div>
        );
    }
}

export default ClassDisplay;