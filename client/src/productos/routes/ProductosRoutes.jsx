import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import { Producto2 } from "../pages/Producto2";
import { Navbar } from '../../ui/components/Navbar';
import { Producto1 } from '../pages/Producto1';
import {SearchPage} from '../pages/SearchPage';
import {Inicio} from '../pages/Inicio';
import { Footer } from '../pages/Footer';
import { HowToBuy } from '../pages/HowToBuy';



export const ProductosRoutes = () => {
  return (
    <>
     <Navbar/>
   <div className='container'>
   <Routes>
        <Route path="/hombre" element={<Producto1/>} />
        <Route path="/mujer" element={<Producto2/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path='/inicio'element={<Inicio/>}/>
        <Route path='/how-to-buy'element={<HowToBuy/>}/>
        <Route path="/"element={<Navigate to ="/inicio"/>} />
  </Routes>
  </div>
  <Footer/> 
  </>
  )
}
