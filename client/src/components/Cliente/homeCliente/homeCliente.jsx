// traerse el nombre
// mensaje personalizado "Hola Pedrito qué querés hacer"
// tener una navbar con las opciones:
//                                    Ver carta
//                                    Ver tu pedido
// en base a lo que se seleccione renderizar un componente u otro


import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Carta from '../carta/carta.jsx'
import DetallePedido from '../detallePedido/detallePedido.jsx'
import { useEffect } from 'react'
import { getCuenta, getDatosMesa, setDatosMesa } from '../../../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'
import Cuenta from '../cuenta/cuenta.jsx'
import logo from "../../../assets/Logo.png";
import axios from 'axios'
import serverFinder from '../../../store/deploy/serverFinder.js'
import 'boxicons'
import Aviso from '../avisoPedidoModificado/aviso';
import logowhite from "../../../assets/Logo_white.png";
import {Navbar, Container, Nav} from 'react-bootstrap';
// import CBot from '../ChatBot/ChatBot.jsx'
var global = require('../../Resto/global.module.css')



export default function HomeClient(){
    const infoMesa = useSelector(state => state.infoMesa);
    const{name,idResto,idMesa, idCliente} = useParams()
    const pedidoModificado = useSelector(state=> state.pedidoModificado)
    const infoCliente = useSelector(state=> state.ClientInfo);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cliente = {
        nameCliente:name,
        idResto:idResto,
        idMesa:idMesa,
        idCliente: idCliente
    }

    function setMesa(){
        const resto = axios.get(serverFinder(`resto/${idResto}`));
        const mesa = axios.get(serverFinder(`mesa/${idMesa}`));
        Promise.all([resto, mesa])
        .then(res=>{
            dispatch(setDatosMesa({
                resto:res[0].data[0].name,
                mesa: res[1].data[0].name
            }))
        })
    }

    if(infoCliente.estadoCliente === 'finalizado'){
        navigate('/mesaCerrada');
    }
    
    useEffect (() =>{
        setMesa();
        dispatch(getDatosMesa(cliente));
        dispatch(getCuenta(idCliente));
    // repite el get para ver el estado hasta que cambia a autorizado     
        let repet = setInterval(()=>{
            axios.get(serverFinder(`cliente/cliente/${idCliente}`))
                  .then(res=>{
                    dispatch(getDatosMesa({estadoCliente:res.data.estado}));
                    if(res.data.estado === 'finalizado'){
                        clearInterval(repet);
                    }
                  })
          }          
           , 2000);
    }, []);


    // este estado en false muestra el detalle y en true muestra la carta
    const [ state, setState] = useState("ver menu");
    
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
            <div className="col">
                <center>
                <img src={logo} alt="Logo" width="50%"  className="navbar-brand" />
                </center>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

            <div>
                    <button onClick={e => {handleClickPedidoMenu(e)}} className={global.botonnavbar}>Ver Menu</button>
                    <button onClick={e => {handleClickPedido(e)}} className={global.botonnavbar}>Ver Pedido</button>
                    <button onClick={e => {handleClickPedidoCuenta(e)}} className={global.botonnavbar}>Ver Cuenta</button>
            </div>
         </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
            <div className="container-fluid">
                <div className="col">
                    <center>
                        <h6>Hola <b>{name}</b>, estás en la {infoMesa.mesa} de</h6>
                        <h4>{infoMesa.resto}</h4>
                    </center>
                </div>
            </div>
            
            {
                state === "ver pedido" ? <DetallePedido/> : state === "ver menu" ? <Carta/> :  <Cuenta/>  
            }
            <div>
                {pedidoModificado?
                    <Aviso />
                    :
                    null
                }
            </div> 
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
        <footer className={global.footer}>
        <img src={logowhite} height="55px" alt="logo"/>
        <div>
        {/* <script type="text/javascript"> 
        {(function () { 
            var ldk = document.createElement('script'); 
            ldk.type = 'text/javascript'; ldk.async = true; 
            ldk.src = 'https://s.cliengo.com/weboptimizer/61afe3f2f02aad002a715f0c/61afe3f4f02aad002a715f10.js?platform=view_installation_code'; 
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(ldk, s); 
            })()};
            </script> */}
        </div>
        </footer>
        </div>
  
    )
}