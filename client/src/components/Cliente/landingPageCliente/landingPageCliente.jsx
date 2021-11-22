// debería traer por params el ID de la mesa
//  ese ID en la store para enviarlo en el post del pedido
//
// mensaje bienvenida
// input para el nombre del cliente ---> guardar  en store para enviarlo en el post del pedido
// boton submit "Ingresar"

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { useState } from "react";

export default function LandingPageClient() {
  const [input, setInput] = useState({
    name: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { name } = input;
    if (name === undefined || name.length < 3) {
      return alert("Por favor, escríbe un nombre valido");
    }
    navigate("/home");
  }

  return (
    <div>
      <img src={logo} alt="Logo" width="30%" />

      <h2>Bienvenido, soy tu mozo virtual</h2>
      <h3>Por favor, escribe tu nombre aquí:</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nombre..."
          value={input.name}
          name="name"
          required
          onChange={(e) => handleChange(e)}
        />
        <div>
          
            <button type="submit">Ingresar</button>
          
        </div>
      </form>
    </div>
  );
}
