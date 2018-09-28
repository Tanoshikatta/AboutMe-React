import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
    render(){
        return(
            <Jumbotron style={{backgroundColor: "#506C7F",
                               justifyContent: "center",
                               margin: "50px"}}>
                <h1>Welcome</h1>
                <p>
                    Software Engineer and team leader with extensive experience across the entire 
                    application development lifecycle.  Skilled at communicating with and interfacing 
                    between technical and non-technical parties.  Passionate about elegant algorithm 
                    and architecture design.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default Home;