import React from "react";
import {useAuth0} from '@auth0/auth0-react';

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
       
    return <button onClick={() => loginWithRedirect()} class="btn btn-danger btn-sm w-50">Login</button>
} 