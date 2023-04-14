import {
  StyledFormContainer,
  StyledFormControl,
  StyledFormTitle,
  StyledFormButton,
} from "./Contacto-styles";
import { Form } from "react-bootstrap";
import { useState } from "react";

const ContactForm = () => {
  //guardado de todos los contactos, un objeto por cada contacto
  const [infoContact, setInfoContact] = useState([]);
  //nombre y un estado por cada elemento a guardar.
  const [nombreCliente, setNombreCliente] = useState("");

  const [correoCliente, setCorreoCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [mensajeCliente, setMensajeCliente] = useState("");

  const handleNombre = (e) => {
    setNombreCliente(e.target.value);
    console.log(nombreCliente);
  };

  const handleCorreo = (e) => {
    setCorreoCliente(e.target.value);
    console.log(correoCliente);
  };

  const handleTelefono = (e) => {
    setTelefonoCliente(e.target.value);
    console.log("y el telefono esss", telefonoCliente);
  };

  const handleMensaje = (e) => {
    setMensajeCliente(e.target.value);
    console.log("mostrando mensaje:", mensajeCliente);
  };
  //el submit nos trae la info al objeto contacto, y después agregamos cada objeto a nuestro array Info...
  const handleSubmit = (e) => {
    e.preventDefault();
    const contacto = {
      nombre: nombreCliente,
      correo: correoCliente,
      telefono: telefonoCliente,
      mensaje: mensajeCliente,
    };
    setInfoContact([...infoContact, contacto]);
    console.log(infoContact);
    //dejamos los estados vacíos para volver a usarlos.
    setNombreCliente("");
    setCorreoCliente("");
    setTelefonoCliente("");
    setMensajeCliente("");
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>Contacta con nosotros</StyledFormTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introduce tu nombre"
            value={nombreCliente}
            onChange={handleNombre}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <StyledFormControl
            type="email"
            placeholder="Introduce tu correo electrónico"
            value={correoCliente}
            onChange={handleCorreo}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introduce tu teléfono"
            value={telefonoCliente}
            onChange={handleTelefono}
          />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
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
