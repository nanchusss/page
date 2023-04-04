import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { QuizCard, Title, OptionButton } from "..//Quizz/Quizz-styles";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [paredesCondicion, setParedesCondicion] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [techosIncluidos, setTechosIncluidos] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [presupuesto, setPresupuestos] = useState([]);

  //switch para cambiar la pagina del quizz y vamos guardando todos los estados en un objeto
  const handleOptionSelect = (option) => {
    switch (page) {
      case 1:
        setTipoTrabajo(option);
        setPage(2);
        break;

      case 2:
        setParedesCondicion(option);
        setPage(3);
        break;

      case 3:
        setTechosIncluidos(option);
        setPage(4);
        break;
      default:
        break;
    }
  };

  const handlenumeroTelefonoChange = (event) => {
    setNumeroTelefono(event.target.value);
  };

  const handleSubmit = () => {
    // Guardamos la info en un objeto para contactar al cliente.

    const data = {
      tipoTrabajo,
      paredesCondicion,
      techosIncluidos,
      numeroTelefono,
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
            <Title>¿Qué desea pintar?</Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Pintar Casa o Piso")}
            >
              Pintar Casa o Piso
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() =>
                handleOptionSelect("Pintar Local Comercial/Garage")
              }
            >
              Pintar Local Comercial/Garage
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Pintar Oficina")}
            >
              Pintar Oficina
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 2 && (
        <QuizCard>
          <Card.Body>
            <Title>¿En qué estado se encuentran las paredes?</Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("En perfecto estado")}
            >
              En perfecto estado
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Necesitan pequeños")}
            >
              Necesitan arreglos pequeños (raspaduras, faltantes pequeños)
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Necesitan arreglos varios")}
            >
              Necesitan mejoras (faltantes, muchas raspaduras)
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 3 && (
        <QuizCard>
          <Card.Body>
            <Title>¿Deseas incluir techos?</Title>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("Incluir techos")}
            >
              Incluir techos
            </OptionButton>
            <OptionButton
              variant="primary"
              onClick={() => handleOptionSelect("No incluir techos")}
            >
              No incluir techos
            </OptionButton>
          </Card.Body>
        </QuizCard>
      )}
      {page === 4 && (
        <QuizCard>
          <Card.Body>
            <Title>Perfecto! Deja tu número para que te contactemos:</Title>
            <Form
              style={{
                marginTop: "100px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu número telefónico"
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
            </Form>
          </Card.Body>
        </QuizCard>
      )}
    </>
  );
};

export default Quiz;
