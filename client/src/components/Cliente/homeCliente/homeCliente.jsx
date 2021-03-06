// traerse el nombre
// mensaje personalizado "Hola Pedrito qué querés hacer"
// tener una navbar con las opciones:
//                                    Ver carta
//                                    Ver tu pedido
// en base a lo que se seleccione renderizar un componente u otro

import './homeCliente.css';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Carta from '../carta/carta.jsx'
import DetallePedido from '../detallePedido/detallePedido.jsx'
import { useEffect } from 'react'
import { getCuenta, getDatosMesa, infoUsuario, setDatosMesa, setPedidoModificado } from '../../../store/actions/index.js'
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
    const usuario = useSelector(state => state.usuario)
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
        navigate(`/mesaCerrada/${idCliente}`);
    }
    
    useEffect (() =>{
        setMesa();
        dispatch(getDatosMesa(cliente));
        dispatch(getCuenta(idCliente));
        dispatch(infoUsuario(idResto));
    // repite el get para ver el estado hasta que cambia a autorizado     
        let repet = setInterval(()=>{
            axios.get(serverFinder(`cliente/cliente/${idCliente}`))
                  .then(res=>{
                    dispatch(getDatosMesa({estadoCliente:res.data.estado}))
                    dispatch(setPedidoModificado(res.data.pedidoModificado))
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
        {/* <Navbar expand="lg">
        <Container>
        <Navbar.Brand> */}
            <div className="col">
                <center>
                <img src={logo} alt="Logo" width="20%"  className="navbar-brand" />
                </center>
            </div>
            <div className="container-fluid">
                <div className="col">
                    <center>
                        <h6>Hola <b>{name}</b>, estás en la {infoMesa.mesa} de</h6>
                        <h4>{infoMesa.resto}</h4>
                    </center>
                </div>
            </div>


            <div>
                <center>
                    <button onClick={e => {handleClickPedidoMenu(e)}} className={global.botonnavbar}>Menu</button>
                    <button onClick={e => {handleClickPedido(e)}} className={global.botonnavbar}>Tu Pedido</button>
                    <button onClick={e => {handleClickPedidoCuenta(e)}} className={global.botonnavbar}>Cuenta</button>
                </center>
            </div>
         {/* </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar> */}
            <br/>
            {infoCliente.estadoCliente === 'solicitado'?
                <div>
                    <center>
                    <div className="advertencia">
                        <h6>¡En un instante te habilitaremos para realizar pedidos!</h6>
                    </div>
                    </center>    
                   
                    <center>
                        <div className="mientras">
                            <h6 id="mientras_texto">Mientras tanto puedes ir viendo nuestro menu...</h6>
                        </div>
                    </center>
                </div>
                : null
            }    

            {
                state === "ver pedido" ? <DetallePedido setState={setState}/> : state === "ver menu" ? <Carta verPedido={handleClickPedido}/> :  usuario[0] ? <Cuenta usuario={{accesstoken: usuario[0].accesstoken, publickey:usuario[0].publickey }} /> : <h2>Cargando</h2>  
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
    
        </div>
        <footer className={global.footer}>
        {/* <img src={logowhite} height="55px" alt="logo"/> */}     
        </footer>
        </div>
    )
}