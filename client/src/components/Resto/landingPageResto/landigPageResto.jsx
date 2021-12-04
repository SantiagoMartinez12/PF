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
import Carrousel from "../../Cliente/carta/Carrousel";
var global = require('../../Resto/global.module.css')



export default function LandingPageResto() {
  const { isAuthenticated, user} = useAuth0();
  const dispatch = useDispatch()
  const restoId = useSelector((state) => state.usuario)
  const ruta = `/home/resto/${restoId[0]?.id}`

  
  useEffect(()=>{
    
    if(isAuthenticated){
      
      dispatch(crearUsuario({
        id: user.sub,
        mail: user.email,
      
      }))
    }
  },[isAuthenticated])
  
  console.log(restoId[0])

  return (
    <div>    
    <div className="container">
      <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-auto  text-center" >
      <p/>
      {isAuthenticated ? (
        <div  class={global.whitebacklog}>
          <h3>¡Bienvenido!</h3>
          <Perfil />
          <Link to={ruta}><button class="btn btn-primary btn-sm w-50">Ingresar</button></Link>
          <br/><br/>
          <LogOutButton />
        </div>
      ) : (
        <div>
        <img src={logo} alt="Logo" width="40%" class="img-fluid"/>
        <img src={bienvenido} alt="Logo" width="70%" class="img-fluid"/>
        <LoginButton />
        <br/>
        <br/>
        <br/>
        </div>
      )}
        </div>
      </div>
    </div>
    <footer class={global.footer}>
    <img src={logowhite} height="55px"/>
    </footer>
    </div>
  );
}

//