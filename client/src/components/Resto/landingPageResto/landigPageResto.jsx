// mensaje bienvenida
// botones registrarse o loguearse
// si toca loguearse --- > lo dirije al home
// si toca registrarse --- > renderiza componente registrarse

import React, { useEffect } from "react";
import { LogOutButton } from "./logout";
import { LoginButton } from "./login";
import { Perfil } from "./perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { crearUsuario } from "../../../store/actions";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import logowhite from "../../../assets/Logo_white.png";
import bienvenido from "../../../assets/bienvenido.png";

// import Carrousel from "../../Cliente/carta/Carrousel";
var global = require('../../Resto/global.module.css')



export default function LandingPageResto() {
  const { isAuthenticated, user} = useAuth0();
  const dispatch = useDispatch()
  const restoId = useSelector((state) => state.usuario)
  const ruta = `/home/resto/${restoId[0]?.id}`
  const rutaAdmin = "/admin/auth0|61b246f578b4bd006ac1cac4"
  
  
  useEffect(()=>{
    
    if(isAuthenticated){
      
      dispatch(crearUsuario({
        id: user.sub,
        mail: user.email,
      
      }))
    }
  },[isAuthenticated])
  
  console.log(user)

  return (
    <div>    
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-auto  text-center" >
      <p/>
      {isAuthenticated? (

        <div  className={global.whitebacklog}>
          <h3>¡Bienvenido!</h3>
          <Perfil />
          { user.email === "admin@mozovirtual.com" ? <>
          <Link to={rutaAdmin}><button className="btn btn-primary btn-sm w-50">Ingresar</button></Link></>:
          <><Link to={ruta}><button className="btn btn-primary btn-sm w-50">Ingresar</button></Link></>}
          <br/><br/>
          <LogOutButton />
        </div>
      ) 
        :
      (
        <div>
        <img src={logo} alt="Logo" width="40%" className="img-fluid"/>
        <img src={bienvenido} alt="Logo" width="70%" className="img-fluid"/>
        <LoginButton />
        <br/>
        <br/>
        <br/>
        </div>
      )}
        </div>
      </div>
    </div>
    <footer className={global.footer}>
    <img src={logowhite} height="55px" alt="logo"/>
    </footer>
    </div>
  );
}

//