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
  transition: transform 0.5s;

  &:hover {
    transform: rotateX(360deg);
  }
  @media (max-width: 767px) {
    left: 0px;
  }
`;

export const NavbarContainer = styled(Navbar)`
  padding-right: 20px;
  width: 100%;
  height: 120px; // Ajuste la altura para acomodar los botones
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  top: 0;
`;

export const NavLinks = styled(Nav)`
  font-size: 32px;
  margin-left: 10%;
  margin-right: 10%;
  flex-grow: 1;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 80px;
    margin-left: 190px;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    background-color: rgba(250, 247, 247, 0.755);
  }
`;

export const ButtonsHeader = styled.div`
  position: absolute;
  top: 25px; // Ajuste el valor de posición superior
  right: 10px; // Ajuste el valor de posición derecha
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ButtonsHeader2 = styled.div`
  position: absolute;
  width: auto;
  flex-direction: row;
  display: flex;
  top: 25px; // Ajuste el valor de posición superior
  right: 50px; // Ajuste el valor de posición derecha
  @media (max-width: 767px) {
    display: none;
  }
`;
export const styles = {
  link: {
    marginLeft: "10px",
  },
};
