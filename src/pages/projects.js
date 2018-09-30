import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import ProjectBlurb from '../components/projectBlurb';

class Projects extends Component {
    render(){
        return(
            <div style={{maxWidth: 800,
                marginLeft: 30, marginRight: 30}}>
                <div>
                <h2>Professional</h2>
                <ProjectBlurb
                    title="Monarch"
                    description={
                        <p>Datawatch's self-service data preparation tool.  Monarch includes two separate products: Monarch Classic and Data Prep Studio.  I am currently the development lead for Data Prep Studio.</p>
                    }
                    badges={
                        <div>
                            <Badge>XAML</Badge>
                            <Badge>C#</Badge>
                        </div>
                    }
                    buttonTitle="Website"
                    buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/monarch/")}/>
                </div>

                <div>
                <h2 style={{marginTop: 50}}>Hobby</h2>
                <ProjectBlurb 
                    title="ArkanoidJS" 
                    description={
                        <p>Arkanoid-esque game I'm developing to learn the ins and outs of vanilla JavaScript.</p>
                    }
                    badges={
                        <div>
                            <Badge>JavaScript</Badge>
                            <Badge>HTML</Badge>
                            <Badge>CSS</Badge>
                        </div>
                    }
                    buttonTitle="Play"
                    buttonClick={() => this.buttonClickHandler("https://austinspears.github.io/Arkanoid-JS/")
                    }
                />
                </div>

            </div>
        );
    }

    buttonClickHandler(url)
    {
        var win = window.open(url);
        win.focus();
    }
}

export default Projects;