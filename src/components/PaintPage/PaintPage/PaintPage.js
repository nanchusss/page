import React from "react";
import {
  StyledHeader,
  StyledImage,
  StyledTitle,
  StyledSubtitle,
  Fondo,
  GridItem,
  Grid,
  Image,
  Title,
  Container2,
  Btn,
  StyledButton,
  ContainerSection,
  CustomCard,
  CustomCardImg,
  CustomCardTitle,
  CustomCardText,
} from "./PaintPage-Styles";
import { Container, Row, Col } from "react-bootstrap";
import Image2 from "..//..//PaintPage/PaintPage/images/pareja presupuesto.jpg";
import ofrecer1 from "..//PaintPage/images/ofrecer1.png";
import ofrecer2 from "..//PaintPage/images/ofrecer2.png";
import ofrecer3 from "..//PaintPage/images/ofrecer3.png";
import ofrecer4 from "..//PaintPage/images/ofrecer4.png";
//import pensamosenti1 from "..//PaintPage/images/diseno-interiores-sala-estar-moderna-mediados-siglo-arbol-monstera.jpg";
import pensamosenti2 from "..//PaintPage/images/blog.jpg";
import pensamosenti3 from "..//PaintPage/images/contact.jpg";
import { useContext } from "react";
import { MyContext } from "../../../Context";

const PaintPage = () => {
  //acá pongo la constante si está loggeado el usuario o no. y luego la voy a poner como condicional para que si está loggeado me haga el onclick y si no me redirija
  const isLoggedIn = localStorage.getItem("email");
  const {
    handleState,
    state,
    handleShowBlog,
    handleShowQuizz,
    handleShowForm,
  } = useContext(MyContext);
  return (
    <>
      <StyledHeader>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <StyledImage src={Image2} alt="Logo" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Btn onClick={handleShowQuizz}>Pressupost Online!</Btn>
            </Col>
          </Row>
        </Container>
      </StyledHeader>
      <Fondo>
        <Container>
          <Row>
            <Col>
              <StyledTitle>
                Necessites renovar les abertures de la teva llar?
              </StyledTitle>
              <StyledSubtitle>
                Contactans i sol.licita el teu pressupost
              </StyledSubtitle>
            </Col>
          </Row>
        </Container>
      </Fondo>
      <StyledButton variant="primary" onClick={handleShowQuizz}>
        Inicia
      </StyledButton>
      <Container2>
        <Title>Que t'oferim?</Title>
        <Grid>
          <GridItem>
            <Image src={ofrecer1} />
            <StyledSubtitle>Obertures de alumini i PVC</StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer2} />
            <StyledSubtitle>Instal.lació d'obertures</StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer3} />
            <StyledSubtitle>Dissenys personalitzats</StyledSubtitle>
          </GridItem>
          <GridItem>
            <Image src={ofrecer4} />
            <StyledSubtitle>Pressupost sense cap compromís</StyledSubtitle>
          </GridItem>
        </Grid>
      </Container2>
      <ContainerSection>
        <Container>
          <Title>Perquè pensem en tu</Title>
          <Row>
            <Col md={4}>
              <CustomCard onClick={handleShowBlog}>
                <CustomCardImg variant="top" src={pensamosenti2} />
                <CustomCardTitle>Blog</CustomCardTitle>
                <CustomCardText>
                  Novetats, articles, consells i molt més per a tu.
                </CustomCardText>
              </CustomCard>
            </Col>
            <Col md={4}>
              <CustomCard onClick={handleShowForm}>
                <CustomCardImg variant="top" src={pensamosenti3} />
                <CustomCardTitle>Contacta amb nosaltres</CustomCardTitle>
                <CustomCardText>
                  Deixa les teves dades i ens comunicarem amb tu lo més aviat
                  possible.
                </CustomCardText>
              </CustomCard>
            </Col>
          </Row>
        </Container>
      </ContainerSection>
    </>
  );
};

export default PaintPage;
