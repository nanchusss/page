import PaintPage from "./components/PaintPage/PaintPage/PaintPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header";
import PasarelaImagenes from "./components/PasarelaImagenes/PasarelaImagenes";
import "bootstrap/dist/js/bootstrap.min.js";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import InspirationPage from "./pages/Inspiration/Inspiration";
import Login from "./pages/Login/Login";
import Blog from "./pages/Blog/Blog";

function App() {
  const [state, setState] = useState(false);
  const [login, setLogin] = useState(false);
  const [alreadyLogged, setAlreadyLogged] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

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
  };

  if (login === true) {
    console.log("login ahora es true");
    return (
      <Login
        login={login}
        handleLogin={handleLogin}
        alreadyLogged={alreadyLogged} //
        handleSetAlreadyLogged={handleSetAlreadyLogged}
      />
    );
  }
  if (state === true && alreadyLogged === false) {
    console.log("state es true y alreadylogged es false");
    return (
      <Login
        login={login}
        handleLogin={handleLogin}
        handleSetAlreadyLogged={handleSetAlreadyLogged}
      />
    );
  }

  if (alreadyLogged === true && state === true) {
    console.log(alreadyLogged);
    console.log("holis, el areadylogged es true y le dieron click a la card");
    return (
      <>
        <Header1 handleLogin={handleLogin}></Header1>
        <InspirationPage />
      </>
    );
  }
  if (showBlog === true) {
    return <Blog />;
  }

  return (
    <>
      {/* <Header handleLogin={handleLogin}></Header> */}
      <Header1 handleLogin={handleLogin} handleState={handleState}></Header1>
      <PasarelaImagenes />
      <Group />
      <PaintPage
        state={state}
        handleState={handleState}
        handleShowBlog={handleShowBlog}
      />
      <Footer />
    </>
  );
}

export default App;
