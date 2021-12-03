// mensaje bienvenida
// botones registrarse o loguearse
// si toca loguearse --- > lo dirije al home
// si toca registrarse --- > renderiza componente registrarse

import { React, useEffect, useState } from "react";
import { LogOutButton } from "./logout";
import { LoginButton } from "./login";
import { Perfil } from "./perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { crearUsuario } from "../../../store/actions";


export default function LandingPageResto() {

  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  // const [probando, setProbando] = useState({
  //   id: user.sub,
  //   mail: user.mail
  // })
  // let claves = Object.keys(user); 
  // for(let i=0; i< claves.length; i++){
  //   let clave = claves[i];
  //   console.log(user[clave]);
  // }
  
  
  // console.log(isAuthenticated)
  // console.log(user.sub)
  // console.log(typeof user)

// for (var x in user) {
//   console.log(user[x])
// }

  // useEffect(()=>{
  //   dispatch(crearUsuario(
  //   probando
  //   ))      
  // },[])

  if (isLoading) {
    return <div> Loading...</div>;
  }


  return (
    <div>
      <h1>Bienvenido!</h1>
      <p />
      {isAuthenticated ? (
        <>
          <Perfil />
          <LogOutButton />
          <p>{user.sub}</p>
          
          <Link to ="/home/resto">Ingresar</Link>
           </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
