import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
    render(){
        return(
            <Jumbotron>
                <h1 style={{marginLeft: -10, marginBottom: 20}}>Welcome!</h1>
                <p>
                    The url and navbar probably clued you in, but I'm Austin Spears.
                    I have been developing software professionally for over six years 
                    with a primary focus on creating desktop applications using XAML and C#.
                    <br/>
                    <br/>
                    I am currently the team lead for Datawatch's self service data preparation product: Data Prep Studio!
                </p>
                <p>
                    <Button bsStyle="primary" onClick={this.linkedInClick}>LinkedIn Profile</Button>
                </p>
            </Jumbotron>
        );
    }

    linkedInClick()
    {
        var win = window.open("https://www.linkedin.com/in/austinspears/");
        win.focus();
    }
}

export default Home;