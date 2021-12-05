import React, { useEffect, useState } from "react";
import AutorizaMesa from "../home/autorizaMesa"
import Card from "./card";
import logo from "../../../assets/Logo.png";
import s from "../home/home.module.css"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDetalle, getIdClienteToState, getMesa } from "../../../store/actions";
import { Link } from "react-router-dom";
import axios from "axios"
import Detalle from "./detalle";

export default function HomeResto(){
    const mesas = useSelector(state => state.mesas)
    const {restoId} = useParams()
    

    const [clientes, setClientes] = useState()
    const [state, setState] = useState(false)
    

    
    const dispatch = useDispatch()
    // const getMesas = dispatch(getMesa("397799a7-45df-4051-a12d-e880cdd59c0b"))
    
    // const ruta = `${restoId}/home/resto/setting/`

    useEffect(()=>{
      setInterval(()=>{
            dispatch(getMesa(restoId)) // id resto
            updateMesa()
        }, 5000)
       
    },[])
    function updateMesa(){
        axios.get(`http://localhost:3001/api/cliente/${restoId}/autorizado`)
            .then(res =>{
                setClientes(res.data)
            })

    }
    function setearEstadoFalse(){
        setState(false)
    }
    
    function handleClick(e,idCliente){
        e.preventDefault() 
        dispatch(getIdClienteToState(e.target.value))    

        setState(true)
    }
    
  /*   <div class="grid-container">
  <div class="logo"></div>
  <div class="rueda"></div>
  <div class="logOut"></div>
  <div class="AutorizaMesa"></div>
  <div class="Mesas"></div>
  <div class="Detalle"></div>
</div> */
    
    
    // console.log(mesas)
    return(
        <div className={s.gridcontainer}>
            <div className={s.logo}>
                 <img src={logo} alt="Logo" width="30%" />
            </div>
            <div className={s.rueda}>
                <i class="bi bi-gear"></i>
                <Link to={`/home/resto/setting/${restoId}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
                </Link>
            </div>
            <div className={s.logOut}> {/* a completar */}
            </div>
            
            <div className={s.AutorizaMesa}>
            <AutorizaMesa restoId={restoId}/>
            </div>
            

            <div className={s.Mesas}>
            {
            clientes?.map(el =>{
                   
                    return(
                            <div class="card" width="1rem">
                           {/*  <Link to= {`/home/resto/detalle/${idResto}/${idCliente}`}>  */}
                            <div class="card-body">
                                <h5 class="card-title">{el.mesa.name}</h5>
                                <p class="card-text">{el.nombre}</p>
                                <button class="btn btn-light btn-sm" value={el.id} onClick={(e) => handleClick(e,el.id)}>Ver Detalle</button>
                            </div>
                            
                        </div>
                 /*        <div>
                    <Card idMesa={el.mesaId} name={el.mesa.name} idCliente={el.id} nombreCliente={el.nombre}
                    idResto={restoId}
                    />
                    </div> */
                    )
                })
            }
        </div>
        <div className={s.Detalle}>
            {
               state === true ?
                <Detalle  idResto={restoId} funcion={setearEstadoFalse}/>
                : 
                <h1>Seleccionar mesa</h1>
            }
        </div>
        </div>
    )
}