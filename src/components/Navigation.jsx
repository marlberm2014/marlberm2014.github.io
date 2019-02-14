import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function createNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Paper works</Nav.Link>
      </Nav>
    </Navbar>
  );
}

class Navigation extends Component {
  render() {
    return createNav();
  }
}

export default Navigation;
