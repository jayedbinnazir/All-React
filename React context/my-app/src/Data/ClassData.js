import React, { Component } from 'react';
import axios from 'axios'

class ClassData extends Component {
    constructor(props){
        super(props)
        this.state={
            myData:[],
            myStatus:" "
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({myData:response.data , myStatus:response.status})
            console.log(`${this.state.myStatus}`)
        })
        .catch(error=>{
            console.log('error')
        })
    }

    render() {

        const dataList=this.state.myData;
        const myList=dataList.map(dataList=>{
            return <li id={dataList.id} >{dataList.title} </li>
        })

      

        return (
            <div>
                <ul>
                    {myList}
                </ul>
            </div>
        );
    }
}

export default ClassData;