import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
    render(){
        return(
            <Jumbotron style={{backgroundColor: "#506C7F", 
                               position: "relative",
                               marginLeft: 30,
                               marginRight: 30,
                               }}>
                <h1>Welcome!</h1>
                <p style={{maxWidth: 800}}>
                    The url and navbar probably clued you in, but in case you were curious I'm Austin Spears.
                    I have been developing software professionally for over six years with a primary focus on
                    creating WPF applications using XAML and C#.
                    <br/>
                    <br/>
                    I am currently the team lead for Datawatch's data preparation product: Data Prep Studio
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