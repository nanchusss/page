import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog/Blog";
import InspirationPage from "../pages/Inspiration/Inspiration";
import Login from "../pages/Login/Login";
const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />} />
      <Route path="/inspiration" element={<InspirationPage />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};
export default Rutas;
