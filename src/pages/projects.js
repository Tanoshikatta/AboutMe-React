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
                        className="topProjectBlurb"
                        title="Data Prep Studio"
                        description={
                            <p>Datawatch's modern data preparation tool.  I am currently the development lead for this product!</p>
                        }
                        badges={
                            <div>
                                <Badge>XAML</Badge>
                                <Badge>C#</Badge>
                            </div>
                        }
                        buttonTitle="Website"
                        buttonClick={() => this.buttonClickHandler("https://docs.datawatch.com/monarch/desktop/About_Data_Prep_Studio.htm")}/>
                    <ProjectBlurb
                        className="innerProjectBlurb"
                        title="Table Extractor"
                        description={
                            <p>A tool for automatically discovering tables within PDF files, which can then be exported to Data Prep Studio.  The algorithms in 
                                Table Extractor have since been patented as part of US Patent: <a href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%252Fnetahtml%252FPTO%252Fsrchnum.htm&r=1&f=G&l=50&s1=9703766.PN.&OS=PN/9703766&RS=PN/9703766">9703766</a>.  I am technically also the development lead for this product 
                                and was the team lead during its creation.</p>
                        }
                        badges={
                            <div>
                                <Badge>XAML</Badge>
                                <Badge>C#</Badge>
                            </div>
                        }
                        buttonTitle="Website"
                        buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/table-extractor/")}/>
                    <ProjectBlurb
                        className="innerProjectBlurb"
                        title="Monarch"
                        description={
                            <p>Datawatch's legacy data preparation tool.  I worked on parts of Monarch 11 towards the end of its life cycle and helped 
                                develop key portions of Monarch 12 which was nearly a complete rewrite.  Monarch is packaged alongside Data Prep Studio 
                                as part of Monarch Complete.</p>
                        }
                        badges={
                            <div>
                                <Badge>XAML</Badge>
                                <Badge>C#</Badge>
                            </div>
                        }
                        buttonTitle="Website"
                        buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/monarch/")}/>
                    <ProjectBlurb
                        className="innerProjectBlurb"
                        title="Panopticon"
                        description={
                            <p>Datawatch's data visualization tool.  Following Datawatch's aquisition of Panopticon Software I moved to Stockholm, Sweden
                                for three months in order to build relationships and help integrate their team into our organization.  During my time there
                                I worked on various bits of the front end code which included inventing a new gesture for placing a visualization onto the canvas.
                            </p>
                        }
                        badges={
                            <div>
                                <Badge>XAML</Badge>
                                <Badge>C#</Badge>
                            </div>
                        }
                        buttonTitle="Website"
                        buttonClick={() => this.buttonClickHandler("https://www.datawatch.com/our-platform/panopticon/")}/>
                </div>
                <div>
                    <h2 style={{marginTop: 80}}>Hobby</h2>
                    <ProjectBlurb
                        className="topProjectBlurb" 
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
                    <ProjectBlurb
                        className="innerProjectBlurb" 
                        title="Personal Website" 
                        description={
                            <p>I developed this website as a way to learn more about React, CSS, and HTML in general.</p>
                        }
                        badges={
                            <div>
                                <Badge>React</Badge>
                                <Badge>React-Bootstrap</Badge>
                                <Badge>JavaScript</Badge>
                                <Badge>HTML</Badge>
                                <Badge>CSS</Badge>
                            </div>
                        }
                        buttonTitle="Source"
                        buttonClick={() => this.buttonClickHandler("https://github.com/AustinSpears/AboutMe-React")
                        }/>
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