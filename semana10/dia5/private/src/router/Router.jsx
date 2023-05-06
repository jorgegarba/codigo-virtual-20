import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import Home from "../pages/Home";
import Header from "../components/Header";
import Private from "../private"
import Login from "../Login/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* rtutas publicas */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      

        {/* rutas privadas */}

        <Route element={<Private/>}>
            <Route path="/contacto" element={<Contacto />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
