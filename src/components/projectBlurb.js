import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/pages.css'

class ProjectBlurb extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            // Need header and description areas
            <div className={this.props.className}>
                <h3>{this.props.title}</h3>
                <div style={{maxWidth: 600, marginLeft:15, marginRight:10, marginTop: 5}}>{this.props.description}</div>
                <div style={{float: "left", marginLeft: 10}}>{this.props.badges}</div>
                <Button onClick={this.props.buttonClick}
                        bsStyle="primary"
                        bsSize="xsmall" 
                        style={{minWidth: 80, marginTop:2, float: "right"}}>
                    {this.props.buttonTitle}
                </Button>
            </div>
        );
    }
}

export default ProjectBlurb;