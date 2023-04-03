import PaintPage from "../components/PaintPage/PaintPage/PaintPage";

import PasarelaImagenes from "../components/PasarelaImagenes/PasarelaImagenes";
import Group from "../components/Group/Group";

const Home = ({ state, handleState, handleShowBlog, handleShowQuizz }) => {
  return (
    <>
      {/* <Header handleLogin={handleLogin}></Header> */}
      {/* <Header1 handleLogin={handleLogin} handleState={handleState}></Header1> */}
      <PasarelaImagenes />
      <Group />
      <PaintPage
        handleShowQuizz={handleShowQuizz}
        state={state}
        handleState={handleState}
        handleShowBlog={handleShowBlog}
      />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
