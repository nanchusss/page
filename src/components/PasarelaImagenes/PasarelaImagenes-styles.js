import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const Pasarela = styled(Carousel)`
  margin-top: 100px;
  @media (max-width: 767px) {
    margin-top: 30px;
    .carousel-item img {
      max-height: 300px;
      object-fit: cover;
    }

    .carousel-caption {
      bottom: 10%;
      left: 10%;
      right: 10%;
    }
  }
`;

export const Subtitulo = styled.p`
  font-size: 42px;

  border-radius: 5px;

  background-color: rgba(188, 184, 184, 0.4);

  @media (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 0px;
  }
`;

export const Titulo = styled.h2`
  font-size: 72px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const Imagen = styled.img`
  max-height: 700px;
  max-width: 100%;
  max-height: 500px; /* establecemos una altura máxima de 500px */
  object-fit: cover;
  height: auto;
  margin-top: 50px;
  object-position: center;

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const styles = {
  img: {
    maxHeight: "700px",
    objectFit: "cover",
    objectPosition: "top",

    "@media (maxWidth: 767px)": {
      maxHeight: "400px",
      objectPosition: "top",
    },
  },
};
