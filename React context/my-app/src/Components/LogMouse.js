import React, { Component } from 'react';

class LogMouse extends Component {
    constructor(props){
        super(props)
        this.state={
            x: 0 ,
            y: 0
        }
    }
    logmouseposition=(e)=>{
        console.log('LogMouseEvent')
        this.setState({x:e.clientX , y: e.clientY})
    }

    componentDidMount(){
        console.log('componentdidmount activate')
        window.addEventListener('mousemove', this.logmouseposition)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logmouseposition)
    }
    render() {
        
        return (
            <div>
                X-{this.state.x}
                Y-{this.state.y}
            </div>
        );
    }
}

export default LogMouse;