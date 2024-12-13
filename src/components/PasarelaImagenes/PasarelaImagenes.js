import Carousel from "react-bootstrap/Carousel";
import CarouselItem1 from "../PasarelaImagenes/Images/interior1.webp";
import CarouselItem2 from "../PasarelaImagenes/Images/interior2.webp";
import CarouselItem3 from "../PasarelaImagenes/Images/interior3.webp";
import { Imagen, Pasarela, Subtitulo, Titulo } from "./PasarelaImagenes-styles";

function PasarelaImagenes() {
  return (
    <Pasarela fade>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Titulo>Vols renovar el teu llar?</Titulo>
          <Subtitulo> A FINESTRACAT som al teu servei</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <Titulo>FINESTRACAT</Titulo>
          <Subtitulo>"La millor oferta"</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Titulo>Inspira't i crea</Titulo>
          <Subtitulo>Dona-li vida a la teva casa amb FINESTRACAT</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
    </Pasarela>
  );
}

export default PasarelaImagenes;
