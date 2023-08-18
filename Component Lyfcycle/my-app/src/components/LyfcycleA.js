import React, { Component } from 'react';
import LyfcycleB from './LyfcycleB'


class LyfcycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Jayed"
        }
        console.log('LyfcycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LyfcycleA getDerivedFromProps')
        return null;
    }

    componentDidMount() {
        console.log("LyfCycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log('LyfcycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('LyfcycleA getSnapShotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {

        console.log('LyfcycleA componentDidUpdate')

    }

    changeState=()=>{
        this.setState({
            name:'Codevolution'
        })
    }
    render() {
        console.log('LyfcycleA Rendered')
        return (
            <div>


                <div>LyfcycleA</div>
                <button onClick={this.changeState }  >Change Name</button>
                <LyfcycleB />

            </div>
        );
    }
}

export default LyfcycleA;