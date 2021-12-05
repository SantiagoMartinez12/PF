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
import { getCuenta, getDatosMesa } from '../../../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import Cuenta from '../cuenta/cuenta.jsx'
import logo from "../../../assets/Logo.png";
import axios from 'axios'
import logowhite from "../../../assets/Logo_white.png";
import {Navbar, Container, Nav, Button, NavDropdown} from 'react-bootstrap';
var global = require('../../Resto/global.module.css')



export default function HomeClient(){

    const{name,idResto,idMesa, idCliente} = useParams()
    const dispatch = useDispatch()
    const cliente = {
        nameCliente:name,
        idResto:idResto,
        idMesa:idMesa,
        idCliente: idCliente
    }
    
    useEffect (() =>{
        dispatch(getDatosMesa(cliente));
        dispatch(getCuenta(idCliente));
    // repite el get para ver el estado hasta que cambia a autorizado     
        let repet = setInterval(()=>{
            axios.get(`http://localhost:3001/api/cliente/cliente/${idCliente}`)
                  .then(res=>{
                    dispatch(getDatosMesa({estadoCliente:res.data.estado}));
                    if(res.data.estado !== 'solicitado'){
                        clearInterval(repet);
                    }
                  })
          }          
           , 2000);
    }, []);

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
        <div>
        <div className="container">
        <Navbar expand="lg">
        <Container>
        <Navbar.Brand>
            <div class="col">
                <center>
                <img src={logo} alt="Logo" width="50%"  class="navbar-brand" />
                </center>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

            <div>
                    <button onClick={e => {handleClickPedidoMenu(e)}} class={global.botonnavbar}>Ver Menu</button>
                    <button onClick={e => {handleClickPedido(e)}} class={global.botonnavbar}>Ver Pedido</button>
                    <button onClick={e => {handleClickPedidoCuenta(e)}} class={global.botonnavbar}>Ver Cuenta</button>
            </div>
         </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
            <div className="container-fluid">
            <div class="col">
                <h5>Bienvenid@ {name}</h5>
            </div>
            </div>
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
        <footer class={global.footer}>
        <img src={logowhite} height="55px"/>
        </footer>
        </div>
  
    )
}