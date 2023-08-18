import React, { Component } from 'react';
import {Typography ,Button } from '@material-ui/core'


class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
            display: false
        }
    }

   
    componentDidMount() {
        console.log("Counter DidMount Run Once")
        document.title=`title ${this.state.count} `
    }

    componentDidUpdate(prevProps , prevState){
        console.log("ClassCounter Update  ")
        document.title = `title ${this.state.count} `
    }

    handleClick=()=>{

        this.setState({count:this.state.count+1})
        

    }

  

   

    

   
    render() {
        return (
            <div>
               <Button variant="contained" color="primary"   onClick={this.handleClick} > 
               <Typography variant="h4" >Count-{this.state.count}</Typography>
                </Button>
            </div>
        );
    }
}


export default ClassCounter;