import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import PlatziLogo from '../assets/images/platzi-logo.png'

const NavbarContainer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt="PlatziLogo"
          src={PlatziLogo}
          width={100}
          className="d-inline-block align-top"
        />
        {' React Bootstrap'}
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavbarContainer
