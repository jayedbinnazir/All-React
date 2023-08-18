import React, { Component } from 'react';

class ClassCounterOne extends Component {
    state={
        count:0,
        name:" "
    }

    componentDidMount(){

        document.title=`Clicked ${this.state.count} times`
    }

   
    componentDidUpdate(prevProps ,prevState){

        if(prevState.count !== this.state.count ){
            
        console.log('Updating Document Title');

        document.title=`Clicked ${this.state.count} times`

        }

    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})} >Click {this.state.count} Times</button>
                <input type="Text" value={this.state.name} onChange={event=>this.setState({name:event.target.value})}  />
            </div>
        );
    }
}

export default ClassCounterOne;