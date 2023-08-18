import React, { Component } from 'react';

class EffectCLassOne extends Component {
    constructor(props){
        super()
        this.state={
            count:0,
            name:' '
        }
    }

    componentDidMount(){
        document.title=`You Clicked ${this.state.count} Times`
    }

    componentDidUpdate(prevProps , prevState){
       
        if(prevState.count!==this.state.count){
            console.log('Updating Document Title')
            document.title=`You Clicked ${this.state.count} Times`
        }
        
        
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                <button onClick={()=>this.setState({count:this.state.count+1})} >Count{this.state.count}</button>
            </div>
        );
    }
}

export default EffectCLassOne;