import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import SkillsGroup from '../components/skillsGroup';

class Skills extends Component {
    render() {
        return (
            <div style={{marginLeft: 30, marginRight: 30}}>
                <h2>Professional</h2>
                <Grid>
                    <Row>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Languages" skills={
                                <div>
                                    <p>XAML</p>
                                    <p>C#</p>
                                    <p>SQL</p>
                                    <p>LINQ</p>
                                </div>}/>
                        </Col>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Tools" skills={
                                <div>
                                    <p>Visual Studio</p>
                                    <p>Resharper</p>
                                    <p>Mercurial</p>
                                    <p>Nuget</p>
                                </div>}/>
                        </Col>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Frameworks" skills={
                                <div>
                                    <p>.NET</p>
                                    <p>WPF</p>
                                    <p>NUnit</p>
                                </div>}/>
                        </Col>
                    </Row>
                </Grid>
                <h2 style={{marginTop: 50}}>Hobby</h2>
                <Grid>
                    <Row>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Languages" skills={
                                <div>
                                    <p>JavaScript</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>}/>
                        </Col>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Tools" skills={
                                <div>
                                    <p>Visual Studio Code</p>
                                    <p>Git</p>
                                </div>}/>
                        </Col>
                        <Col sm={4} md={4}>
                            <SkillsGroup title="Frameworks" skills={
                                <div>
                                    <p>React</p>
                                    <p>React Router</p>
                                    <p>React-Bootstrap</p>
                                </div>}/>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default Skills;