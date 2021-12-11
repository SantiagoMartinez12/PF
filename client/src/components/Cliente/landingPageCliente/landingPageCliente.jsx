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
import axios from "axios";
import serverFinder from "../../../store/deploy/serverFinder";
import { setDatosMesa } from "../../../store/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

var global = require('../../Resto/global.module.css')


export default function LandingPageClient() {
  const { idResto , idMesa} = useParams()
  const [input, setInput] = useState({
    name: "",
  });
  const infoMesa = useSelector(state => state.infoMesa);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function checkMesa(){
    //confirmo si idResto e idMesa son correctos (existen en la BD)
    const exiteResto = axios.get(serverFinder(`resto/${idResto}`));
    const existeMesa = axios.get(serverFinder(`mesa/${idMesa}`));
    Promise.all([exiteResto, existeMesa])
      .then(res=>{
    //si idResto o isMesa no existen lo redirige a una página de error  
      if(res[0].data.length === 0 || res[1].data.length === 0){
        navigate('/errorQr');
      }else{
        dispatch(setDatosMesa({
          resto:res[0].data[0].name,
          mesa: res[1].data[0].name
        }))
      }
    })  
  }

  useEffect (() =>{
    checkMesa()
}, []);




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
    const exiteResto = axios.get(serverFinder(`resto/${idResto}`));
    const existeMesa = axios.get(serverFinder(`mesa/${idMesa}`));
    Promise.all([exiteResto, existeMesa])
      .then(res=>{
    //si idResto o isMesa no existen no postea nada y lo redirige a una página de error  
   
        if(res[0].data.length === 0 || res[1].data.length === 0){
          navigate('/errorQr');
        }else{
         
    //si idResto y idMesa son correctos 
      // me fijo si la mesa está disponible  
          axios.get(serverFinder(`mesa/${idMesa}`))
            .then(respuesta=>{
      // si está ocupada lo redirijo a una ruta mesaocupada        
              if(respuesta.data[0].estado === true){
                navigate(`/mesaocupada/${idResto}/${idMesa}/${name}`);  
              }else{
      //si está disponible postea a la ruta cliente y lo redirige al home Cliente          
                axios.post(serverFinder('cliente'), {nombre:name, mesaId:idMesa,restoId:idResto})
                  .then(resPost=> {
                    navigate(`/${idResto}/${idMesa}/home/${name}/${resPost.data.id}`);
                    
                  })
              }
            })
        }  
    })
  }

  return (
    <div className="container">
      <div className={global.centrar}>
        <div className="col-auto  text-center">
          <div className={global.whiteclientlog}>
          <img src={logo} alt="Logo" width="50%" className="img-fluid"/>
          <h3>Bienvenido</h3>
          <h5>a</h5>
          <h2><b>{infoMesa.resto}</b></h2>
          <h6>estás en <b>{infoMesa.mesa}</b></h6>
          <h6>Escribe tu nombre aquí:</h6>
          <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="input-group p-3 w-80">
            <input className="form-control"
            type="text"
            placeholder="Nombre..."
            value={input.name}
            name="name"
            required
            onChange={(e) => handleChange(e)}
            />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-sm w-50">Ingresar</button>
              </div>
            </div> 
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
