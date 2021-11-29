// debería traer por params el ID de la mesa
//  ese ID en la store para enviarlo en el post del pedido
//
// mensaje bienvenida
// input para el nombre del cliente ---> guardar  en store para enviarlo en el post del pedido
// boton submit "Ingresar"

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { useState, useEffect } from "react";
import { getCategorias } from "../../../store/actions";
import { useDispatch } from "react-redux";


export default function LandingPageClient() {
  const { idResto,idMesa} = useParams()
    const dispatch = useDispatch()
  
  //   useEffect(() => {
  //   dispatch(getCategorias());
  // }, [dispatch]);

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
    navigate(`/${idResto}/${idMesa}/home/${name}`);
  }

  return (
    <div className="container">
      <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-auto  text-center">
          <img src={logo} alt="Logo" width="50%" class="img-fluid"/>
          <h2>Bienvenido</h2>
          <h6>Escribe tu nombre aquí:</h6>
          <form onSubmit={(e) => handleSubmit(e)}>
          <div class="row justify-content-center align-items-center">
            <div class="input-group p-3 w-80">
            <input class="form-control"
            type="text"
            placeholder="Nombre..."
            value={input.name}
            name="name"
            required
            onChange={(e) => handleChange(e)}
            />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-sm w-50">Ingresar</button>
              </div>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
}
