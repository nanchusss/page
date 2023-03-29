import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const FooterCard = styled(Card)`
  padding: 30px;
  background-color: #141414;
  display: flex;
  color: #8f8d8d;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled(Card.Title)`
  text-align: center;
`;

export const FooterButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
