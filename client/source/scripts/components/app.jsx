import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>Pocket Trainer</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/workout">
              <NavItem eventKey={3}>Workout!</NavItem>
            </LinkContainer>
            <LinkContainer to="/payments">
              <NavItem eventKey={2}>Payments</NavItem>
            </LinkContainer>
            <LinkContainer to="/prompt">
              <NavItem eventKey={3}>Pre-Made Workout</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/signin">Login</NavItem>
            <NavItem eventKey={1} href="/signin">Signup</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  };
};

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
export default App;
