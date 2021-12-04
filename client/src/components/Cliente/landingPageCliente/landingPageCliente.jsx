// debería traer por params el ID de la mesa
//  ese ID en la store para enviarlo en el post del pedido
//
// mensaje bienvenida
// input para el nombre del cliente ---> guardar  en store para enviarlo en el post del pedido
// boton submit "Ingresar"

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";



export default function LandingPageClient() {
  const { idResto,idMesa} = useParams()
    
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
      return alert("Por favor, escribe un nombre valido");
    }
    
    //confirmo si idResto e idMesa son correctos (existen en la BD)
    const exiteResto = axios.get(`http://localhost:3001/api/resto/${idResto}`);
    const existeMesa = axios.get(`http://localhost:3001/api/mesa/${idMesa}`);
    Promise.all([exiteResto, existeMesa])
      .then(res=>{
    //si idResto o isMesa no existen no postea nada y lo redirige a una página de error    
        if(res[0].data.length === 0 || res[1].data.length === 0){
          navigate('/errorQr');
        }else{
    //si idResto y idMesa son correctos postea a la ruta cliente y lo redirige al home Cliente
          
          axios.post('http://localhost:3001/api/cliente', {nombre:name, mesaId:idMesa})
            .then(resPost=> {
              navigate(`/${idResto}/${idMesa}/home/${name}/${resPost.data.id}`);
              
            })
        }  
    })
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
