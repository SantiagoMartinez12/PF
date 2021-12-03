import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    // e.preventDefault();
    dispatch(loginWithRedirect);
    navigate("/home/login");
  }

  return <button onClick={() => handleSubmit()}>Login</button>;
};
