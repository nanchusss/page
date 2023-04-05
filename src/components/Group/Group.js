import { useState } from "react";
import {
  ContainerGroup,
  StyledCard,
  StyledText,
  StyledModal,
  StyledTitle,
  DivText,
} from "./Group-styles";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import GroupImage1 from "../Group/Imagenes/Optimized-capataz-joven-pie-atras-ropa-trabajo-naranja-casco-amarillo-usando-rodillo-pintura-nuevo-apartamento-trabajo.jpg";
import GroupImage2 from "../Group/Imagenes/estrellas.jpg";
import GroupImage3 from "../Group/Imagenes/cientecolores.jpg";

const Group = () => {
  // Estado para manejar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Estado para guardar la información de la card que se ha clickeado
  const [cardInfo, setCardInfo] = useState({});

  // Función para mostrar el modal y guardar la información de la card
  const handleCardClick = (info) => {
    console.log(info);
    setCardInfo(info);
    setShowModal(true);
  };

  return (
    <>
      <ContainerGroup>
        <StyledCard
          onClick={() =>
            handleCardClick({
              image: GroupImage1,
              title: "Pintores profesionales a tu servicio",
              text: "Transforma tu hogar en un oasis de color con los pintores profesionales de Cruz del Sur. Nuestro proyecto de servicio de pintura te ofrece la calidad y el cuidado que mereces para dar vida a tus espacios.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faPaintRoller} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Pintores Profesionales
            </Card.Title>
            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Ver más
            </Card.Link>
          </Card.Body>
        </StyledCard>
        <StyledCard
          onClick={() =>
            handleCardClick({
              image: GroupImage2,
              title: "Experiencia de más de una década",
              text: "Con más de una década de experiencia en el mercado, en Cruz del Sur estamos orgullosos de haber llevado la calidad y el cuidado en nuestros servicios de pintura a hogares y negocios en todo el país. Confía en nuestra trayectoria y permítenos hacer realidad tus proyectos de pintura con el más alto nivel de excelencia.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faAward} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Experiencia de más de 10 años
            </Card.Title>
            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Ver más
            </Card.Link>
          </Card.Body>
        </StyledCard>
        <StyledCard
          onClick={() =>
            handleCardClick({
              image: GroupImage3,
              title: "Soluciones personalizadas",
              text: "En Cruz del Sur, entendemos que cada proyecto es único y por eso ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas. Confía en nosotros para hacer realidad tus ideas con excelencia y profesionalismo.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faPaintRoller} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Proyectos Personalizados y adaptados a tus necesidades
            </Card.Title>
            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Ver más
            </Card.Link>
          </Card.Body>
        </StyledCard>
      </ContainerGroup>
      {/* Modal */}
      <StyledModal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
      >
        <Modal.Body>
          <div className="d-flex flex-column flex-md-row">
            {/* la imagen acá */}
            <div className="flex-grow-1">
              <img
                src={cardInfo.image}
                alt="Imagen de la card"
                className="w-100"
              />
            </div>
            {/* descripción de la */}
            <DivText>
              <StyledTitle>{cardInfo.title}</StyledTitle>

              <div className="flex-grow-1">
                <StyledText>{cardInfo.text}</StyledText>
              </div>
            </DivText>
          </div>
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default Group;
