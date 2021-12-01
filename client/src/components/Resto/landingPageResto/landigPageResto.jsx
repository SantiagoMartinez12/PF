// mensaje bienvenida
// botones registrarse o loguearse
// si toca loguearse --- > lo dirije al home
// si toca registrarse --- > renderiza componente registrarse

import React from "react";
import { LogOutButton } from "./logout";
import { LoginButton } from "./login";
import { Perfil } from "./perfil";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPageResto() {
  const { isAuthenticated } = useAuth0();
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
