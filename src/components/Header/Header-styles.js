import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export const Usuario = styled.div`
  padding: 20px;
  margin: 10px;
`;
export const StyledMenu = styled.div`
  width: 250px;
`;
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  position: fixed;
  top: 10px;
  left: 10px;
`;

export const NavbarContainer = styled(Navbar)`
  width: 100%;
  height: 120px; // Ajuste la altura para acomodar los botones
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLinks = styled(Nav)`
  font-size: 22px;
  margin-left: 10%;
  margin-right: 10%;
  flex-grow: 1;
  justify-content: center;
`;

export const ButtonsHeader = styled.div`
  position: absolute;
  top: 25px; // Ajuste el valor de posición superior
  right: 10px; // Ajuste el valor de posición derecha
`;
export const ButtonsHeader2 = styled.div`
  position: absolute;
  width: auto;
  flex-direction: row;
  display: flex;
  top: 25px; // Ajuste el valor de posición superior
  right: 50px; // Ajuste el valor de posición derecha
`;
export const styles = {
  link: {
    marginLeft: "10px",
  },
};
