import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

export const StyledFormContainer = styled.div`
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 500px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 120px;
  }
`;

export const StyledFormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledFormButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledFormControl = styled(Form.Control)`
  margin-bottom: 20px;
`;
