import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { ContenedorColores, Mybuttons } from "./Inspiration-styles";
import { fetchPalettes, fetchImages } from "..//..//services";

function InspirationPage({ handleLogin, alreadyLogged }) {
  const [palettes, setPalettes] = useState([]);
  const [images, setImages] = useState([]);

  // PRIMER LLAMADO PARA TRAER LAS PALETAS DE COLORES
  useEffect(() => {
    const fetchPalettesData = async () => {
      //acá ponemos en practica el services.js, la constante fetchPalettes nos va a servir para ya tener el llamado organizado a la api.
      const palettesData = await fetchPalettes();
      console.log(palettes);

      setPalettes(palettesData);
      console.log(palettes);
    };
    fetchPalettesData();
  }, []);

  useEffect(() => {
    // pre-carganado las imágenes
    palettes.forEach((palette) => {
      //cada elemento del array es una imagen
      const img = new Image();
      console.log(palettes);
      console.log(palette.image.bare);
      img.src = `https://www.thecolorapi.com${palette.image.bare}`;
    });
  }, [palettes]);

  // const handleCardClick = async () => {
  //   console.log("Esta andando el handleclick de las fotos");
  //   const images = await fetchImages();
  //   setImages(images);
  // };
  const handleCardClick = async () => {
    console.log("Esta andando el handleclick de las fotos");
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const result = await axios(
        `https://api.unsplash.com/search/photos?query=interior+color&per_page=10&page=${randomPage}`,
        {
          headers: {
            Authorization:
              "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc",
          },
        }
      );
      setImages(result.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  //LLAMADO PARA ACTUALIZAR EL LLAMADO DE PALETAS Y TRAER MÁS PALETAS

  const handleMoreColorsClick = async () => {
    //volvemos a usar el services, donde ya tenemos el llamado.
    const palettesData = await fetchPalettes();
    setPalettes(palettesData);
  };
  // const handleMoreColorsClick = async () => {
  //   const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  //   //de nuevo vuelvo a llamar a la api para que me dé otros colores para que se inspire el cliente.
  //   const result = await axios(
  //     `https://www.thecolorapi.com/scheme?format=json&count=6&scheme=analogic&hex=${randomHex}`
  //   );
  //   console.log(palettes);
  //   setPalettes(result.data.colors);
  // };

  return (
    <div>
      <Container>
        <h1 className="text-center mb-5">Inspírate</h1>
        <ContenedorColores>
          <Row>
            {palettes.map((palette, index) => (
              <Col md={4} key={index}>
                <Card className="mb-4" onClick={() => handleCardClick()}>
                  <Card.Img variant="top" src={palette.image.named} />
                  <Card.Body>
                    <Card.Title>{palette.name.value}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </ContenedorColores>

        <Row>
          <Col className="text-center mb-5 ">
            <Mybuttons>
              <button
                className="btn btn-primary mt-3 m-3"
                onClick={() => handleMoreColorsClick()}
              >
                Ver más colores
              </button>
              <button
                className="btn btn-primary m-3"
                onClick={() => handleCardClick()}
              >
                Inspírate con imágenes únicas
              </button>
            </Mybuttons>
          </Col>
          <Col style={{ marginBottom: "40px" }} md={{ span: 8, offset: 2 }}>
            <Carousel className="custom-carousel">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 custom-image"
                    src={image.urls.regular}
                    alt={image.alt_description}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InspirationPage;
