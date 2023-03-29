import {
  FooterCard,
  FooterTitle,
  FooterButton,
} from "..//Footer/Footer-styles";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <FooterCard>
      <Card.Header>Cruz del Sur</Card.Header>
      <Card.Body>
        <FooterTitle>Barcelona, España 2023</FooterTitle>
        <Card.Text>Todos los derechos reservados</Card.Text>
        <FooterButton variant="primary">Go somewhere</FooterButton>
      </Card.Body>
    </FooterCard>
  );
}

export default Footer;
