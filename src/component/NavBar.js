import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
const Navigation = () =>{
  return(
    <Navbar className = "control" fixed = "top" variant = "dark" bg = "primary" expand="lg">
  <Navbar.Brand href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Projects</Nav.Link>
      <Nav.Link href="#other">Other Interest</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;