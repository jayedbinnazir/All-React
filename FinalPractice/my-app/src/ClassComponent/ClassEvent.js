import React, { Component } from 'react';
import { Box, Paper, Container } from '@material-ui/core';

class ClassEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        console.log("Event Firing")
        window.addEventListener("mousemove", this.logMousePosition)
    }

    componentWillUnmount(){
        console.log("ClassUnmounted Code")
        window.removeEventListener("mousemove",this.logMousePosition)
    }


    render() {
        return (
            <Container>

                <Box mt={3} p={4} width="30%" mx="auto" component={Paper} elevation={5} >
                    <strong style={{fontSize:"1.5rem"}} >
                        X - {this.state.x}
                        Y - {this.state.y}
                    </strong>
                </Box>

            </Container>
        );
    }
}





export default ClassEvent;