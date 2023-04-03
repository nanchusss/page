import { FooterCard, FooterTitle } from "..//Footer/Footer-styles";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterCard>
      <Card.Header style={{ marginTop: "20px" }}>Cruz del Sur</Card.Header>
      <Card.Body className="text-center">
        <FooterTitle>Barcelona, España 2023</FooterTitle>
        <Card.Text>Todos los derechos reservados</Card.Text>
        <a
          href="http://www.instagram.com/cruzdelsur.pintura"
          className="d-inline-block rounded-circle"
          style={{
            backgroundColor: "#E1306C",
            width: "50px",
            height: "50px",
            textAlign: "center",
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="#fff"
            className="mi-clase"
            style={{
              margin: "auto",
              paddingTop: "10px",
            }}
          />
        </a>
      </Card.Body>
    </FooterCard>
  );
}

export default Footer;
