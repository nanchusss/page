import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useContext } from "react";
import { ContainerForm } from "./Login-styles";
import { MyContext } from "..//..//Context";

const Login = () => {
  const { handleSetAlreadyLogged, alreadyLogged } = useContext(MyContext);

  console.log("está entrando login");
  console.log(alreadyLogged);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    console.log(email);
    localStorage.setItem("password", password);
    setLoggedIn(true);
    handleSetAlreadyLogged(true);
    console.log("ahora está loggeado desde el componente Login", alreadyLogged);
  };
  useEffect(() => {
    console.log("Cambio en login");
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    console.log("Cambio en total");
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setLoggedIn(false);
  };
  const handleChange = () => {
    console.log(
      "estamos haciendo un llamado a handlesubmit y a hanglesetalreadylogged"
    );
    // Llamando a las funciones pasadas como props
    handleSubmit();
    handleSetAlreadyLogged();
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleChange}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label class="mb-3 text-warning text-center lh-lg">
            Ingrese su email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={handleLogout}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onChange={handleChange}
          onClick={handleSetAlreadyLogged}
        >
          Enviar
        </Button>
      </Form>
    </ContainerForm>
  );
};

export default Login;
