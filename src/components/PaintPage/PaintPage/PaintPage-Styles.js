import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 60px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const StyledImage = styled.img`
  height: 400px;
  width: 100%;
  margin-left: 80px;
  object-fit: cover; /* o cover, dependiendo de lo que necesites */
  border-radius: 3px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 5px;
    margin-bottom: 20px;
  }
`;
export const StyledContainer = styled.div`
  display: grid;

  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  gap: 0;
  @media only screen and (max-width: 768px) {
    justify-items: center;
  }
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
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 10px;
    padding: 15px;
    text-align: center;
  }
`;

export const StyledSubtitle = styled.p`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  font-size: 22px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
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
  margin-left: 10px;
  display: flex;
  justify-content: left;
  font-size: 1.1rem;
  padding: 8px 12px;
`;

export const Container2 = styled.div`
  background-color: #cae0e7;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;

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
    font-size: 20px;
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
