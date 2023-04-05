import {
  StyledFormContainer,
  StyledFormControl,
  StyledFormTitle,
  StyledFormButton,
} from "./Contacto-styles";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <StyledFormContainer>
      <StyledFormTitle>Contacta con nosotros</StyledFormTitle>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <StyledFormControl type="text" placeholder="Introduce tu nombre" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <StyledFormControl
            type="email"
            placeholder="Introduce tu correo electrónico"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <StyledFormControl type="text" placeholder="Introduce tu teléfono" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
          <StyledFormControl
            style={{ width: "100%", borderRadius: "5px" }}
            as="textarea"
            rows={3}
            placeholder="Escribe aquí tu mensaje"
          />
        </Form.Group>

        <StyledFormButton variant="primary" type="submit">
          Enviar
        </StyledFormButton>
      </Form>
    </StyledFormContainer>
  );
};

export default ContactForm;
