import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { QuizCard, Title, OptionButton, Formy } from "..//Quizz/Quizz-styles";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [paredesCondicion, setParedesCondicion] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [techosIncluidos, setTechosIncluidos] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [presupuesto, setPresupuestos] = useState([]);

  //switch para cambiar la pagina del quizz y vamos guardando todos los estados en un objeto
  const handleOptionSelect = (option) => {
    switch (page) {
      //bueno acá las páginas van cambiando con el switch según el condicional del return para renderizar cada una.
      case 1:
        setTipoTrabajo(option);
        setPage(2);
        break;
      case 2:
        setTechosIncluidos(option);
        setPage(3);
        break;

      case 3:
        setParedesCondicion(option);
        setPage(4);
        break;

      case 4:
        //se guarda el nombre del cliente, pero lo hace el handle, acá solo pasamos a la pagina siguiente.
        setPage(5);
        break;
      default:
        break;
    }
  };
  //Se guarda el teléfono del cliente
  const handlenumeroTelefonoChange = (event) => {
    setNumeroTelefono(event.target.value);
  };
  //Se solicita el nombre del cliente
  const handlenombreClienteChange = (event) => {
    console.log("the nameeeee iiiisss", nombreCliente);
    setNombreCliente(event.target.value);
  };

  const handleSubmit = () => {
    // Guardamos la info en un objeto para contactar al cliente y tener una idea de lo que necesita y su número de contacto.

    const data = {
      tipoTrabajo,
      paredesCondicion,
      techosIncluidos,
      numeroTelefono,
      nombreCliente,
    };
    console.log(data);

    setPresupuestos(...data);
    console.log(presupuesto);
  };

  return (
    <>
      {page === 1 && (
        <QuizCard>
          <Card.Body>
            <Title>¿Com podem ajudar-te?</Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Instalar o comprar")}
            >
              Compra + Instal.lació
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() =>
                handleOptionSelect("Pintar Local Comercial/Garage")
              }
            >
              Instal.lació
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 2 && (
        <QuizCard>
          <Card.Body>
            <Title>
              Perfecte! Ajuda'ns a assessorar-te millor. Quin es el teu nom?
            </Title>
            <Formy onSubmit={() => handleOptionSelect(nombreCliente)}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre aquí"
                  value={nombreCliente}
                  onChange={handlenombreClienteChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "80%",
                  marginTop: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                }}
              >
                Enviar
              </Button>
            </Formy>
          </Card.Body>
        </QuizCard>
      )}
      {page === 3 && (
        <QuizCard>
          <Card.Body>
            <Title>
              {" "}
              Perfecte {nombreCliente}! Necessites retirar obra antiga?
            </Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("En perfecto estado")}
            >
              No, es una obra nova.
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Necesitan pequeños")}
            >
              Si, necessito retirar abertures antigues
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 4 && (
        <QuizCard>
          <Card.Body>
            <Title>¿T'interessa Alumini o PVC?</Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Alumini")}
            >
              Alumini
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("pvc")}
            >
              PVC
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("No estic decidit")}
            >
              Necessito assessorament
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 5 && (
        <QuizCard>
          <Card.Body>
            <Title>
              Perfecte {nombreCliente}! Ens deixes un número de telèfon per
              poder contactar-te?
            </Title>
            <Formy onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Ingressa el teu teléfon"
                  value={numeroTelefono}
                  onChange={handlenumeroTelefonoChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "80%",
                  marginTop: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                }}
              >
                Enviar
              </Button>
            </Formy>
          </Card.Body>
        </QuizCard>
      )}
    </>
  );
};

export default Quiz;
