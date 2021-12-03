// traerse el nombre
// mensaje personalizado "Hola Pedrito qué querés hacer"
// tener una navbar con las opciones:
//                                    Ver carta
//                                    Ver tu pedido
// en base a lo que se seleccione renderizar un componente u otro


import React, { useState } from 'react'
import { useParams } from 'react-router'
import Carta from '../carta/carta.jsx'
import DetallePedido from '../detallePedido/detallePedido.jsx'
import { useEffect } from 'react'
import { getDatosMesa } from '../../../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import Cuenta from '../cuenta/cuenta.jsx'
import logo from "../../../assets/Logo.png";
import axios from 'axios'




export default function HomeClient(){

    const{name,idResto,idMesa} = useParams()
    const dispatch = useDispatch()
    const cliente = {
        nameCliente:name,
        idResto:idResto,
        idMesa:idMesa
    }
    
    useEffect (() =>{
        dispatch(getDatosMesa(cliente));
        // actualizarEstado()
    }, [dispatch]);

    const infoCliente = useSelector(state=> state.ClientInfo);

    // este estado en false muestra el detalle y en true muestra la carta
    const [ state, setState] = useState("ver pedido");
    
    function handleClickPedido(e){
        setState("ver pedido")
    }
    function handleClickPedidoMenu(e){
    setState("ver menu")
    }
    function handleClickPedidoCuenta(e){
        setState("ver cuenta")
    }

    
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top ">
            <div className="container-fluid">
            <div class="col">
                <img src={logo} alt="Logo" width="50%"  class="navbar-brand" />
            </div>
            <div class="col">
                <h5>Bienvenid@ {name}</h5>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-right">
                    <li class="nav-item px-2">
                    <button onClick={e => {handleClickPedidoMenu(e)}} class="btn btn-primary btn-md  navbar-btn">Ver Menu</button>
                    </li>
                    <li class="nav-item px-2">
                    <button onClick={e => {handleClickPedido(e)}} class="btn btn-primary btn-md   navbar-btn">Ver Pedido</button>
                    </li>
                    <li class="nav-item px-2">
                    <button onClick={e => {handleClickPedidoCuenta(e)}} class="btn btn-primary btn-md  navbar-btn">Ver Cuenta</button>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            </nav>
            {
                state === "ver pedido" ? <DetallePedido/> : state === "ver menu" ? <Carta/> :  <Cuenta/>  
            }
            <br/>
            <br/>
            {infoCliente.estadoCliente === 'solicitado'?
                <div>
                    <h5>En un instante te habilitaremos para realizar pedidos.</h5>
                    <h6>mientras tanto puedes ir viendo nuestro menu...</h6>
                </div>
                : null
            }    
        </div>
    )
}