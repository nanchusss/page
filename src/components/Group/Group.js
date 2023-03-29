import Card from "react-bootstrap/Card";
import { ContainerGroup } from "./Group-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function Group() {
  return (
    <ContainerGroup>
      <Card
        style={{
          width: "26rem",
          border: "none",
          textAlign: "center",
        }}
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
            Card Link
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "26rem", border: "none", textAlign: "center" }}>
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
      </Card>
      <Card style={{ width: "26rem", border: "none", textAlign: "center" }}>
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
      </Card>
    </ContainerGroup>
  );
}

export default Group;
