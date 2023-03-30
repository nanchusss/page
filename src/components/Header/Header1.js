import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import styled from "styled-components";
import LogoMarca from "..//.//../Images/White and Blue Minimalist Clean Modern Technology Logo (4) (1).jpg";
import { useState } from "react";

const Logo = styled.img`
  height: 100px;
  width: 100px;
  position: fixed;
  top: 10px;
  left: 10px;
`;

const NavbarContainer = styled(Navbar)`
  width: 100%;
  height: 120px; // Ajuste la altura para acomodar los botones
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

const NavLinks = styled(Nav)`
  font-size: 22px;
  margin-left: 30%;
  margin-right: 30%;
  flex-grow: 1;
  justify-content: center;
`;

const ButtonsHeader = styled.div`
  position: absolute;
  top: 25px; // Ajuste el valor de posición superior
  right: 10px; // Ajuste el valor de posición derecha
`;
const styles = {
  link: {
    marginLeft: "10px",
  },
};
const Header = ({ handleLogin }) => {
  const [login, setLogin] = useState(false);
  const isLoggedIn = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload(); // Recarga la página para actualizar el estado de inicio de sesión
  };

  return (
    <NavbarContainer bg="light" expand="lg" className="mb-5">
      <Navbar.Brand href="#">
        <Logo
          src={LogoMarca}
          className="d-inline-block align-top mt-0"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinks className="mr-auto mt-3">
          <Nav.Link stylee={styles.link} href="/" className="pl-3">
            Inicio
          </Nav.Link>
          <Nav.Link style={styles.link} href="/productos">
            Productos
          </Nav.Link>
        </NavLinks>
        <Nav>
          {isLoggedIn ? (
            <>
              <Nav.Item>
                <Nav.Link className="mr-2">{isLoggedIn}</Nav.Link>
              </Nav.Item>
              <Button variant="danger" className="ml-2" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <ButtonsHeader>
              <Button variant="primary" className="m-3" onClick={handleLogin}>
                Iniciar sesión
              </Button>
              <Button variant="success" className="m-3">
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
