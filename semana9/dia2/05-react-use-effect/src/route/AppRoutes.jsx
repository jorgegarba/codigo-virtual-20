import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App"
import Home
 from "../components/pages/Home";
 import React from 'react'
 
 const AppRoutes = () => {
   return (
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<App/>}/>
        <Route index element={<Home/>}/>
        <Route />
     </Routes>

       
     </BrowserRouter>
   )
 }
 
 export default AppRoutes
 