import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import Imagen1 from "..//.//../Images/White and Blue Minimalist Clean Modern Technology Logo (4) (1).jpg";

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

const Header = () => {
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
            <StyledButton1 variant="outline-primary">
              Iniciar sesión
            </StyledButton1>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
