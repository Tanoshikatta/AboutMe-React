import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ProjectBlurb extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            // Need header and description areas
            <div style={{marginLeft: 15}}>
                <h3>{this.props.title}</h3>
                <div style={{maxWidth: 600, marginLeft:15, marginRight:15}}>{this.props.description}</div>
                <div style={{float: "left"}}>{this.props.badges}</div>
                <Button onClick={this.props.buttonClick} 
                        bsStyle="primary" bsSize="xsmall" 
                        style={{borderRadius: 10, minWidth: 80, float: "right"}}>
                    {this.props.buttonTitle}
                </Button>
            </div>
        );
    }
}

export default ProjectBlurb;