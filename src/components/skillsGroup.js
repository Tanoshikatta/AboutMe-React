import React, { Component } from 'react';

class SkillsGroup extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div style={{position: "relative", 
                             left: 8,
                             top: 10}}>
                    {this.props.skills}
                </div>
            </div>
        );
    }
}

export default SkillsGroup;