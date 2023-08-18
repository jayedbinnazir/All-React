import React, { Component } from 'react';

class LyfcycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Jayed"
        }
        console.log('LyfcycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LyfcycleB getDerivedFromProps')
        return null;
    }

    componentDidMount() {
        console.log("LyfCycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log('LyfcycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log('LyfcycleB getSnapShotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {

        console.log('LyfcycleB componentDidUpdate')

    }
    render() {
        console.log('LyfcycleB Rendered')
        return (
            <div>
                LyfCycleB
                
            </div>
        );
    }
}

export default LyfcycleB;