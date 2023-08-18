import React, { Component } from 'react';

class ClassTimer extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount(){
        this.interval=setInterval(this.tick , 1000)
        console.log("Class-Updating The Timer")
    }
    render() {
        return (
            <div>
                Timer:{this.state.count}
            </div>
        );
    }
}

export default ClassTimer;