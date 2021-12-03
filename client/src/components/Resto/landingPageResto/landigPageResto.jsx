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


export default function LandingPageResto() {
  const { isAuthenticated, user} = useAuth0();
  const dispatch = useDispatch()
  const restoId = useSelector((state) => state.usuario)
  const ruta = `/home/resto/${restoId[0]?.id}`
  
  
  useEffect(()=>{
    
    if(isAuthenticated){
      
      dispatch(crearUsuario({
        id: user.sub,
        mail: user.email
      }))
    }
  },[isAuthenticated])
  

  return (
    <div>
      <h1>Bienvenido!</h1>
      <p />
      {isAuthenticated ? (
        <>
          <Perfil />
          <LogOutButton />
          <Link to={ruta}><button>Ingresar</button></Link>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
