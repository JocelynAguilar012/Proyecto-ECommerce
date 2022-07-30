import React from 'react';
import { AppRouter } from '../../router/AppRouter';
import { Routes, Route, Navigate} from "react-router-dom";
import {Product1} from '../../userRegistered/pages/Product1';
import {Product2} from '../../userRegistered/pages/Product2';
//import {Inicio} from '../pages/Inicio';
import {Homepage} from '../../userRegistered/pages/Homepage';
import useAuth from "../../hooks/useAuth"
import {NavbarRegistered} from "../../ui/components/NavbarRegistered";
import { Footer } from '../pages/Footer';
import {Catalogo} from '../../userRegistered/pages/Catalogo'
import { Basket } from '../../userRegistered/components/Basket';
// logica para el if <Route path="account" element={(!user ) ? (<NavbarRegistered/>):(<LoginCrearS/>)}/>

export const RegisteredUser = () => {
  const user=useAuth().user;
  //console.log(user);

    if (user) {
      return(
        <>
        <NavbarRegistered/>
        <Routes>
        {/*<Route path="/hombre/usuario" element={<Product1/>} />
        <Route path="/mujer/usuario" element={<Product2/>} />*/}
        <Route path='/inicio/usuario'element={<Homepage/>}/>
        <Route path='/catalogo/usuario'element={<Catalogo/>}/>
        <Route path='/cart-items'element={<Basket/>}/>
        <Route path="/"element={<Navigate to ="/inicio/usuario"/>} />
        </Routes>
        <Footer/>
        </>
      )}
      else{
        return (
          <>
          <AppRouter/>
          </>
        )

      }
  }

