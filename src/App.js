import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';
import Home from './components/home';
import Skills from './components/skills';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => (
          <div className="App">
            <div>
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    Austin Spears
                  </Navbar.Brand>
                  <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                  <Nav>
                    <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
                    <NavItem componentClass={Link} href="/skills" to="/skills">Skills</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div>
                <TransitionGroup className="transition-group">
                  <CSSTransition
                    key={location.key}
                    classNames='fade'
                    timeout={300}>
                    <section className="route-section">
                      <Switch location={location}>
                          <Route exact path="/" component={Home}/>
                          <Route path="/skills" component={Skills}/>
                        </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
        )}/>
      </BrowserRouter>
    );
  }
}

export default App;
