import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const Fondo = styled.div`
  background-size: 100% !important;
  background-position: center;
  color: black;
`;

export const StyledTitle = styled.h1`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  font-size: 56px;
  font-family: src(
    "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Tilt+Warp&display=swap"
  );

  margin-top: 40px;
`;

export const StyledSubtitle = styled.p`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  font-size: 18px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  min-width: 300px;
  min-height: 50px;
  font-size: 20px;
  margin-bottom: 40px;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center !important;
`;
export const Btn = styled(Button)`
  margin-left: 40px;
  display: flex;
  justify-content: left;
`;
export const Container2 = styled.div`
  background-color: #cae0e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ContainerSection = styled.div`
  padding: 50px 0;
`;

export const Title3 = styled.h2`
  font-size: 70px;
  text-align: center;
  margin-bottom: 50px;
`;

export const CustomCard = styled(Card)`
  cursor: pointer;
  border: none;
  margin-bottom: 30px;
`;

export const CustomCardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

export const CustomCardTitle = styled(Card.Title)`
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const CustomCardText = styled(Card.Text)`
  font-size: 14px;
  margin-bottom: 0;
`;
