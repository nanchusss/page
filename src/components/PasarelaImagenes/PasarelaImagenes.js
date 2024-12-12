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
          <Titulo>Vols renovar la teva llar?</Titulo>
          <Subtitulo> A Finestracat som al teu servei</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <Titulo>Finestracat</Titulo>
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
          <Titulo>Inspirat i crea</Titulo>
          <Subtitulo>Donali vida a la teva casa amb Finestracat</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
    </Pasarela>
  );
}

export default PasarelaImagenes;
