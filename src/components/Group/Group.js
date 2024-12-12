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
import {
  faArrowRotateBack,
  faHouseChimneyWindow,
  faManatSign,
  faPaintRoller,
  faUser,
  faUserTie,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import GroupImage1 from "../Group/Imagenes/detalle.jpeg";
import GroupImage2 from "../Group/Imagenes/interior vivienda.jpeg";
import GroupImage3 from "../Group/Imagenes/perfil detalle.jpeg";

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
              title: "Instal·ladors professionals al teu servei",
              text: "Transforma la teva llar en un espai de confort amb els instal·ladors professionals de FinestraCat. El nostre servei d'instal·lació d'obertures d'alumini i PVCGI t'ofereix la qualitat i l'atenció que mereixes per donar vida als teus espais.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faUser} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Instal·ladors professionals
            </Card.Title>

            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Veure més
            </Card.Link>
          </Card.Body>
        </StyledCard>
        <StyledCard
          onClick={() =>
            handleCardClick({
              image: GroupImage2,
              title: "Més de 30 anys d'experiència",
              text: "Amb més de 30 anys d'experiència en la fabricació i instal·lació d'obertures d'alumini i PVC, a FinestraCat estem orgullosos d'haver portat qualitat i atenció als nostres serveis a llars i negocis de tot el territori. Confia en la nostra trajectòria i permet-nos fer realitat els teus projectes amb el més alt nivell d'excel·lència.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faAward} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Experiència de més de 30 anys
            </Card.Title>
            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Veure més
            </Card.Link>
          </Card.Body>
        </StyledCard>
        <StyledCard
          onClick={() =>
            handleCardClick({
              image: GroupImage3,
              title: "Solucions personalitzades",
              text: "A FinestraCat, entenem que cada projecte és únic, i per això oferim solucions personalitzades que s'adapten a les teves necessitats específiques. Confia en nosaltres per fer realitat les teves idees amb excel·lència i professionalitat.",
            })
          }
        >
          <Card.Body>
            <FontAwesomeIcon icon={faHouseChimneyWindow} size="2xl" />
            <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
              Solucions personalitzades
            </Card.Title>
            <Card.Link
              href="#"
              style={{ textDecoration: "none", color: "#585858" }}
            >
              Veure més
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
