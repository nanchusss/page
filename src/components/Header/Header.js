import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Imagen1 from "..//.//../Images/White and Blue Minimalist Clean Modern Technology Logo (4) (1).jpg";
import { Usuario, Div } from "./Header-styles";
import { Breadcrumb } from "react-bootstrap";
import { style } from "../../pages/Login/Login-styles";

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 120px;
  max-height: auto;
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
  font-size: 16px;
  border-radius: 10px;
  height: 50px;
`;
const StyledButton1 = styled(Button)`
  margin-left: 20px;
  background: none;
  font-size: 16px;
  border-radius: 10px;
  height: 50px;
`;
const style2 = {
  bread: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
  },
};

const Header = ({ handleLogin, login }) => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          {" "}
          <Col xs={6}>
            <StyledImage src={Imagen1} alt="Logo" />
          </Col>
          <Col xs={6} className="d-flex justify-content-end align-items-center">
            <StyledButton variant="primary">Solicitar cotización</StyledButton>
            {login === false ? (
              <StyledButton1 variant="outline-primary" onClick={handleLogin}>
                Iniciar sesión
              </StyledButton1>
            ) : (
              <div>
                <Usuario>Welcome! {localStorage.getItem("email")}</Usuario>
                <StyledButton1 variant="outline-primary" onClick={handleLogin}>
                  Logout
                </StyledButton1>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
