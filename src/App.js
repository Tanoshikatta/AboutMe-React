import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { LinkContainer } from 'react-router-bootstrap';

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
              <Navbar className="navbar-inverse">
                <Navbar.Header>
                  <Navbar.Brand>
                    Austin Spears
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <LinkContainer to="/" activeClassName="">
                    <NavItem>Home</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/skills" activeClassName="">
                    <NavItem>Skills</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar>
              <div>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames='fade'
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/skills" component={Skills}/>
                    </Switch>
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
