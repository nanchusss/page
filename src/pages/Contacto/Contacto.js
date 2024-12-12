import {
  StyledFormContainer,
  StyledFormControl,
  StyledFormTitle,
  StyledFormButton,
} from "./Contacto-styles";
import { Form } from "react-bootstrap";
import { useState } from "react";
// import emailjs from "emailjs-com"; // eslint-disable-line no-unused-vars

const ContactForm = () => {
  const [infoContact, setInfoContact] = useState([]);
  const [nombreCliente, setNombreCliente] = useState("");
  const [correoCliente, setCorreoCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [mensajeCliente, setMensajeCliente] = useState("");

  const handleNombre = (e) => {
    setNombreCliente(e.target.value);
  };

  const handleCorreo = (e) => {
    setCorreoCliente(e.target.value);
  };

  const handleTelefono = (e) => {
    setTelefonoCliente(e.target.value);
  };

  const handleMensaje = (e) => {
    setMensajeCliente(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacto = {
      nombre: nombreCliente,
      correo: correoCliente,
      telefono: telefonoCliente,
      mensaje: mensajeCliente,
    };
    setInfoContact([...infoContact, contacto]);
    setNombreCliente("");
    setCorreoCliente("");
    setTelefonoCliente("");
    setMensajeCliente("");

    alert("Mensaje Enviado ;)");

    // // Envío de email
    // const templateParams = {
    //   from_name: nombreCliente,
    //   from_email: correoCliente,
    //   to_name: "cruzdelsur.pintura@gmail.com",
    //   message_html: mensajeCliente,
    //   phone: telefonoCliente,
    // };
    // emailjs
    //   .send("default_service", "template_id", templateParams)

    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((error) => {
    //     console.log("FAILED...", error);
    //   });
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>Contacta amb nosaltres</StyledFormTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introduce tu nombre"
            value={nombreCliente}
            onChange={handleNombre}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correu electrònic</Form.Label>
          <StyledFormControl
            type="email"
            placeholder="Introduce tu correo electrónico"
            value={correoCliente}
            onChange={handleCorreo}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Telèfon</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introduce tu teléfono"
            value={telefonoCliente}
            onChange={handleTelefono}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Missatge</Form.Label>
          <StyledFormControl
            style={{ width: "100%", borderRadius: "5px" }}
            as="textarea"
            rows={3}
            placeholder="Escribe aquí tu mensaje"
            value={mensajeCliente}
            onChange={handleMensaje}
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
