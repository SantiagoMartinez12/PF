// mensaje bienvenida
// botones registrarse o loguearse
// si toca loguearse --- > lo dirije al home
// si toca registrarse --- > renderiza componente registrarse

import React, { useEffect } from "react";
import { LogOutButton } from "./logout";
import { LoginButton } from "./login";
import { Perfil } from "./perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../../../store/actions";


export default function LandingPageResto() {
  const { isAuthenticated, user} = useAuth0();
  const dispatch = useDispatch()


  if(isAuthenticated){
  
    dispatch(crearUsuario({
      id: user.sub,
      mail: user.email
    }))
  }

  return (
    <div>
      <h1>Bienvenido!</h1>
      <p />
      {isAuthenticated ? (
        <>
          <Perfil />
          <LogOutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
