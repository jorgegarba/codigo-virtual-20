// para poder craer nueastr rutas debemois importar lo sgt
//BrowserRouter  va envolver todas las rutas qu creamos
// Routes : hijos esto nos permitira crears rutas hijos
//Route es el encaragdo de recibir el path y el element y rebnderiza el elemento xcomo ruta

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import AppEjemplo from "../pages/AppEjemplo";



const Router = () => {
  //como esti es un compomente tenemos que usar el return para poder crear las rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppEjemplo/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
