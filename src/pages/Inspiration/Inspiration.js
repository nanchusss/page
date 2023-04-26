import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { ContenedorColores, Mybuttons } from "./Inspiration-styles";
import { fetchPalettes, fetchImages2 } from "..//..//services";

function InspirationPage() {
  const [palettes, setPalettes] = useState([]);
  const [images, setImages] = useState([]);

  // PABLO ASÍ ESTARÍA? SETEO AQUÍ LA PALETA.s

  //aquí estoy haciendo el seteo de la paleta aquí y solo tengo en services el llamado a la api...estaría bien?
  useEffect(() => {
    const fetchPalettesData = async () => {
      try {
        const response = await fetchPalettes();
        setPalettes(response.data.colors);
      } catch (error) {
        console.error(error);
      }
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

  //modificado...seteo imagenes aquí donde llamo al método...
  const handleCardClick = async () => {
    console.log("Esta andando el handleclick de las fotos");
    try {
      const response = await fetchImages2();
      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
    fetchImages2();
  };

  //LLAMADO PARA ACTUALIZAR EL LLAMADO DE PALETAS Y TRAER MÁS PALETAS
  // aquí lo mismo, llamo el llamado a la api, pero es como que aquí es más específico y seteo lo que quiero mostrar.
  const handleMoreColorsClick = async () => {
    //volvemos a usar el services, donde ya tenemos el llamado.
    const palettesData = await fetchPalettes();
    setPalettes(palettesData.data.colors);
  };

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
