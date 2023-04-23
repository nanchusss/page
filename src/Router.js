import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InspirationPage from "./pages/Inspiration/Inspiration";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Header1 from "./components/Header/Header";
import Quiz from "./pages/Quizz/Quizz";
import ContactForm from "./pages/Contacto/Contacto";
import ProtectedRoute from "./components/Protected-routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Router = () => {
  const [state, setState] = useState(false);
  const [login, setLogin] = useState(false);
  const [alreadyLogged, setAlreadyLogged] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showQuizz, setShowQuizz] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  // acá ponemos para mostrar o no el blog el handle.
  const handleShowBlog = () => {
    console.log("mostrar blog");
    setShowBlog(true);
  };
  //click para mostrar la página de Inspiración
  const handleState = () => {
    console.log(
      "holis estoy manejando la pagina nueva y seteando state como true"
    );
    setState(true);
  };
  //login para entrar en la página loggeado, pero en realidad lo tomo para llamar a login nada más, el que va a desarrollar el loggeado va a ser setAlreadyLogged
  const handleLogin = () => {
    console.log("set login andando, ahora login es true");
    setLogin(true);
  };
  const handleSetAlreadyLogged = () => {
    console.log("seteando alreaday logged para manejar el renderizado");
    setAlreadyLogged(true);
    console.log(alreadyLogged);
  };
  //Mostrar Quizz
  const handleShowQuizz = () => {
    console.log("mostrar Quizz");
    setShowQuizz(true);
  };

  if (login === true) {
    console.log("login ahora es true");
    return (
      <>
        <Login />
        <Footer />
      </>
    );
  }
  if (showForm === true) {
    console.log("muestra el formulario de contacto");
    return (
      <>
        <Header />
        <ContactForm />
      </>
    );
  }

  if (state === true && alreadyLogged === false) {
    console.log("state es true y alreadylogged es false");
    return (
      <>
        <Login
          login={login}
          handleLogin={handleLogin}
          handleSetAlreadyLogged={handleSetAlreadyLogged}
        />
        <Footer />
      </>
    );
  }

  if (alreadyLogged === true || state === true) {
    console.log("ya está loggeado", alreadyLogged);
    console.log("holis, el areadylogged es true y le dieron click a la card");
    return (
      <>
        <Header></Header>
        <InspirationPage />
        <Footer></Footer>
      </>
    );
  }
  if (showBlog === true) {
    return (
      <>
        <Header></Header>
        <Blog />
        <Footer></Footer>
      </>
    );
  }
  if (showQuizz === true) {
    console.log("mostrar Quizz");
    return (
      <>
        <div style={{ position: "fixed", top: 0 }}>
          <Header></Header>
        </div>

        <Quiz></Quiz>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <Header1 handleLogin={handleLogin} handleShowQuizz={handleShowQuizz} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                alreadyLogged={alreadyLogged}
                login={login}
                handleLogin={handleLogin}
                handleSetAlreadyLogged={handleSetAlreadyLogged}
                setAlreadyLogged={setAlreadyLogged}
              />
            }
          />

          <Route
            index
            element={
              <Home
                handleShowQuizz={handleShowQuizz}
                state={state}
                handleState={handleState}
                handleShowBlog={handleShowBlog}
                showBlog={showBlog}
                handleSetAlreadyLogged={handleSetAlreadyLogged}
                handleShowForm={handleShowForm}
              />
            }
          />
          <Route path="/Blog/" element={<Blog />} />
          <Route path="/Quizz/" element={<Quiz />} />
          <Route
            path="/Login/"
            element={
              <Login
                login={login}
                handleLogin={handleLogin}
                alreadyLogged={alreadyLogged} //
                handleSetAlreadyLogged={handleSetAlreadyLogged}
              />
            }
          />
          <Route
            path="/inspiration"
            element={
              <ProtectedRoute alreadyLogged={alreadyLogged}>
                <Route
                  path="/inspiration"
                  element={
                    alreadyLogged ? (
                      <InspirationPage />
                    ) : (
                      <Navigate to="/Login/" />
                    )
                  }
                />
              </ProtectedRoute>
            }
          />
          {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Router;
