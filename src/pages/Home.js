import PaintPage from "../components/PaintPage/PaintPage/PaintPage";
import Header1 from "../components/Header/Header";
import PasarelaImagenes from "../components/PasarelaImagenes/PasarelaImagenes";
import Group from "../components/Group/Group";
import Footer from "../components/Footer/Footer";

const Home = ({ state, handleState, handleShowBlog, handleLogin }) => {
  return (
    <>
      {/* <Header handleLogin={handleLogin}></Header> */}
      {/* <Header1 handleLogin={handleLogin} handleState={handleState}></Header1> */}
      <PasarelaImagenes />
      <Group />
      <PaintPage
        state={state}
        handleState={handleState}
        handleShowBlog={handleShowBlog}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
