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
import LogoMarca from "..//.//../Images/White and Blue Minimalist Clean Modern Technology Logo (4) (1).jpg";

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
        <NavLinks className="mr-auto mt-3">
          <Nav.Link stylee={styles.link} href="/" className="pl-3">
            Inicio
          </Nav.Link>
          <Nav.Link style={styles.link} href="/inspiration">
            Inspírate
          </Nav.Link>
          <Nav.Link style={styles.link} href="/blog">
            Blog
          </Nav.Link>
        </NavLinks>
        <Nav>
          {isLoggedIn ? (
            <>
              <ButtonsHeader2>
                <Nav.Item>
                  <Nav.Link className="mr-2 m-4">{isLoggedIn}</Nav.Link>
                </Nav.Item>
                <Button
                  variant="danger"
                  className="ml-2 m-4"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Button>
              </ButtonsHeader2>
            </>
          ) : (
            <ButtonsHeader>
              <Button variant="primary" className="m-3" onClick={handleLogin}>
                Iniciar sesión
              </Button>

              <Button
                variant="success"
                className="m-3"
                onClick={handleShowQuizz}
              >
                Solicitar cotización
              </Button>
            </ButtonsHeader>
          )}
        </Nav>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default Header;
