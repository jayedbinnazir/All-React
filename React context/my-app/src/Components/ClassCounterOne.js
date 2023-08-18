import React, { Component } from 'react';

class ClassCounterOne extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0,
            name:" "
        }
    }
    Increment=(a)=>{
        this.setState({count:this.state.count+a})
    }

    componentDidMount(){
        console.log("ComponentDidMount Called")
        document.title=`You Clciked ${this.state.count} Times `
    }

    componentDidUpdate(prevProps ,prevState){
       
        if(prevState.count !== this.state.count ){
            console.log("ComponentDidUpdate Called")
            document.title=`You Clciked ${this.state.count} Times `
        }
        
    }
    render() {
        return (
            <div>
                <button onClick={this.Increment.bind(this,1)} >Count{this.state.count} </button>
                <input type='Text' onChange={(event)=>this.setState({name:event.target.value})} value={this.state.name} />
            </div>
        );
    }
}

export default ClassCounterOne;