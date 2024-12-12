import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  styles,
  ButtonsHeader,
  ButtonsHeader2,
} from "./Header-styles";
import LogoMarca from "..//.//../Images/Logo.jpeg";

const Header = ({ handleLogin, handleShowQuizz }) => {
  //isLoggedIn posee la info de mail
  const isLoggedIn = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
    // Recarga la página para actualizar el estado de inicio de sesión, osea cierra sesión.
  };

  return (
    <NavbarContainer bg="light" expand="lg" className="mb-5">
      <Navbar.Brand href="#">
        <Logo
          src={LogoMarca}
          className="d-inline-block align-top mt-0 m-4"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinks className="mr-auto mt-3 ">
          <Nav.Link style={styles.link} href="/" className="ml-2">
            Inici
          </Nav.Link>

          <Nav.Link style={styles.link} href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link style={styles.link} href="/" className="ml-2">
            Contacte
          </Nav.Link>
        </NavLinks>
        <Nav>
          <Button variant="success" className="m-3" onClick={handleShowQuizz}>
            Sol.licitar cotització
          </Button>
        </Nav>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default Header;
