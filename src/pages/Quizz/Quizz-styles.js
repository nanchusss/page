import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";

export const QuizCard = styled(Card)`
  margin: auto;
  margin-top: 15%;
  margin-bottom: 15%;
  max-width: 460px;
  min-height: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 767px) {
    margin-top: 150px;
  }
`;
export const Formy = styled(Form)`
  margin-top: 70px;
  padding-right: 40px;
  padding-left: 40px;
`;

export const Title = styled(Card.Title)`
  font-size: 24px;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 30px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const OptionButton = styled(Button)`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
  border-radius: 3%;
  width: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#063e7a" : "#007bff")};
  //
`;
