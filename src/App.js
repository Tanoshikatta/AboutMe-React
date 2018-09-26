import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About Me</h1>
        </header>
        <div>
        <Carousel className="Carousel" interval={null}>
          <Carousel.Item className="CarouselItem">
              <div className="CarDiv">
                <p>Software Engineer and team leader with extensive experience across the entire <br/>application development lifecycle.  Skilled at communicating with and interfacing <br/>between technical and non-technical parties.  Passionate about elegant algorithm and architecture design.</p>
              </div>
            <Carousel.Caption>
              <h3>Summary</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="CarouselItem">
            <Grid className="CarGrid">
              <Col md={6}>
                <ul>
                  <li>Leadership</li>
                  <li>C#, XAML, SQL</li>
                  <li>Algorithm Design</li>
                  <li>UX Design</li>
                  <li>Architecture Design</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>Agile Software Development</li>
                  <li>Distributed Version Control</li>
                  <li>Continuous Integration </li>
                  <li>Visual Studio, NUnit, Mercurial</li>
                  <li>MVVM, OOP</li>
                </ul>
              </Col>
            </Grid>
            <Carousel.Caption>
              <h3>Skill Highlights</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

      </div>
    );
  }
}

export default App;
