import PaintPage from "./components/PaintPage/PaintPage/PaintPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import PasarelaImagenes from "./components/PasarelaImagenes/PasarelaImagenes";
import "bootstrap/dist/js/bootstrap.min.js";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import InspirationPage from "./pages/Inspiration/Inspiration";

function App() {
  const [state, setState] = useState(false);
  const handleState = () => {
    console.log("holis estoy manejando la pagina nueva");
    setState(true);
  };

  if (state === true) {
    return <InspirationPage />;
  }
  return (
    <>
      <Header></Header>
      <PasarelaImagenes />
      <Group />
      <PaintPage state={state} handleState={handleState} />
      <Footer />
    </>
  );
}

export default App;
