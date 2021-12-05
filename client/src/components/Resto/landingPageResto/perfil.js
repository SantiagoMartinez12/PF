import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
var global = require('../../Resto/global.module.css')

export const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div> Loading...</div>;
  }
// console.log(user.sub)

  return (
      isAuthenticated && (
          <div>
             <img src={user.picture} alt={user.name} class={global.imgperfil}/>
             <h4>{user.name}</h4>
             <p>Email: {user.email}</p>
          </div>
      )
  )
};
