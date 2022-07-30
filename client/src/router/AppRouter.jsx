import { Routes, Route} from "react-router-dom";
import {Login} from "../auth/pages/Login"
import { ProductosRoutes } from "../productos/routes/ProductosRoutes";
import { LoginCrearS } from '../auth/pages/LoginCrearS';
import useAuth from "../hooks/useAuth";
import { NavbarRegistered } from "../ui/components/NavbarRegistered";
//import {ProductsRoutes} from '../userRegistered/routes/ProductsRoutes';


export const AppRouter=()=> {
   //const user=useAuth().user;
    //console.log(user);

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
   <>
    {/*<Navbar/>*/}
    <Routes>
      <Route path="login"element={<Login/>} />
      <Route path="CrearUsuario"element={<LoginCrearS/>} />
      {/*<Route path="account" element={<NavbarRegistered/>}/>*/}
      <Route path="/*"element={<ProductosRoutes/>} />
      {/*<Route path="account" element={(user) ? <NavbarRegistered/>:<LoginCrearS/>}/>*/}
    </Routes>
    </>
  );
}