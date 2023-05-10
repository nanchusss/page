import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [login, setLogin] = useState(false);
  const [alreadyLogged, setAlreadyLogged] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showQuizz, setShowQuizz] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowBlog = () => {
    console.log("mostrar blog");
    setShowBlog(true);
  };

  const handleState = () => {
    console.log(
      "holis estoy manejando la pagina nueva y seteando state como true"
    );
    setState(true);
  };

  const handleLogin = () => {
    console.log("set login andando, ahora login es true");
    setLogin(true);
  };

  const handleSetAlreadyLogged = () => {
    console.log("seteando alreaday logged para manejar el renderizado");
    console.log("already logged es", alreadyLogged);
    setAlreadyLogged(true);
    console.log(alreadyLogged);
  };

  const handleShowQuizz = () => {
    console.log("mostrar Quizz");
    setShowQuizz(true);
  };

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        login,
        setLogin,
        alreadyLogged,
        setAlreadyLogged,
        showBlog,
        setShowBlog,
        showQuizz,
        setShowQuizz,
        showForm,
        setShowForm,
        handleShowForm,
        handleShowBlog,
        handleState,
        handleLogin,
        handleSetAlreadyLogged,
        handleShowQuizz,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
