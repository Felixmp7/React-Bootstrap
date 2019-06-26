import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PlatziLogo from '../assets/images/platzi-logo.png'

const NavbarContainer = () => {
  return (
    <Navbar fixed="top"  bg="dark" expand="lg">
      <Navbar.Brand>
        <img
          alt="PlatziLogo"
          src={PlatziLogo}
          width={100}
          className="d-inline-block align-top"
        />
        {' Conf Hawai'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className="text-white">La conferencia</Nav.Link>
          <Nav.Link className="text-white">Los oradores</Nav.Link>
          <Nav.Link className="text-white">El lugar y la fecha</Nav.Link>
          <Nav.Link className="text-white">Conviertete en orador</Nav.Link>
          <Nav.Link className="text-success">Comprar Tickets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarContainer
