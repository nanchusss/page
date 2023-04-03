import { ContainerGroup, StyledCard } from "./Group-styles";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Group = () => {
  return (
    <ContainerGroup>
      <StyledCard>
        <Card.Body>
          <FontAwesomeIcon icon={faPaintRoller} size="2xl" />
          <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
            Pintores Profesionales
          </Card.Title>
          <Card.Link
            href="#"
            style={{ textDecoration: "none", color: "#585858" }}
          >
            Card Link
          </Card.Link>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Card.Body>
          <FontAwesomeIcon icon={faAward} size="2xl" />
          <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
            Experiencia de más de 10 años
          </Card.Title>
          <Card.Link
            href="#"
            style={{ textDecoration: "none", color: "#585858" }}
          >
            Card Link
          </Card.Link>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Card.Body>
          <FontAwesomeIcon icon={faPaintRoller} size="2xl" />
          <Card.Title style={{ fontWeight: "600", fontSize: "16px" }}>
            Proyectos Personalizados y adaptados a tus necesidades
          </Card.Title>
          <Card.Link
            href="#"
            style={{ textDecoration: "none", color: "#585858" }}
          >
            Card Link
          </Card.Link>
        </Card.Body>
      </StyledCard>
    </ContainerGroup>
  );
};

export default Group;
