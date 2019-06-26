import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PlatziLogo from '../assets/images/platzi-logo.png'
import './styles/Navbar.css'

const NavbarContainer = () => {
  return (
    <Navbar fixed="top"  bg="dark" expand="lg">
      <Navbar.Brand className="text-white">
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
          <Nav.Link className="text-primary">La conferencia</Nav.Link>
          <Nav.Link className="text-primary">Los oradores</Nav.Link>
          <Nav.Link className="text-primary">El lugar y la fecha</Nav.Link>
          <Nav.Link className="text-primary">Conviertete en orador</Nav.Link>
          <Nav.Link className="text-success">Comprar Tickets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarContainer
