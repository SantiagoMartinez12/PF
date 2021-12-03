import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();
  // console.log(user)


 
  return (
      isAuthenticated && (
          <div>
             <img src={user.picture} alt={user.name} />
             <h2>{user.name}</h2>
             <p>Email: {user.email}</p>
 
          </div>
      )
  )
};
