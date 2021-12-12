// import s from "../home/home.module.css"
import React, { useEffect, useState } from "react";
import "./prueba.css"
import logo from "../../../assets/Logo.png";
import { useParams } from "react-router";
import { useDispatch} from "react-redux";
import { getDetalle, getIdClienteToState, getMesa } from "../../../store/actions";
import { Link } from "react-router-dom";
import axios from "axios"
import Detalle from "./detalle";
import {Navbar, Container, Nav, Row, Col, ListGroup, Card} from 'react-bootstrap';
import logowhite from "../../../assets/Logo_white.png";
import serverFinder from "../../../store/deploy/serverFinder";
import {useAuth0} from '@auth0/auth0-react'



import AutorizaMesa from "../home/autorizaMesa"

var global = require('../../Resto/global.module.css')
export default function HomeResto(){
    // const mesas = useSelector(state => state.mesas)
    const {restoId} = useParams()
    const { logout } = useAuth0();


    const [clientes, setClientes] = useState()
    const [state, setState] = useState(false)
    const [estado, setEstado] = useState(false)
   
    const dispatch = useDispatch()
    // const getMesas = dispatch(getMesa("397799a7-45df-4051-a12d-e880cdd59c0b"))
    
    // const ruta = `${restoId}/home/resto/setting/`

    function estadoResto(){
        axios.get(serverFinder(`resto/${restoId}`))
              .then(res => {
                let estadofilter = res.data.filter(e => e.estado === 'autorizado')
                
                if(estadofilter.length > 0){
                    setEstado(true)
                }
            })              
}

   useEffect(()=>{
       estadoResto()
    
   },[])

    useEffect(()=>{
      setInterval(()=>{
            dispatch(getMesa(restoId)) // id resto
            
            updateMesa()
        }, 5000)
       
    },[])

    function updateMesa(){
        axios.get(serverFinder(`cliente/${restoId}/autorizado`))
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
        getDetalle(e.target.value)
        setState(true)
        
    }
    
  /*   <div className="grid-container">
  <div className="logo"></div>
  <div className="rueda"></div>
  <div className="logOut"></div>
  <div className="AutorizaMesa"></div>
  <div className="Mesas"></div>
  <div className="Detalle"></div>
</div> */
    let className
    
    // console.log(mesas)
    return(
        <div>
             <Navbar expand="lg">
             <Container fluid>
              <Navbar.Brand>
              <img src={logo} alt="Logo" width="40%" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav>
              <button onClick={() => logout({returnTo: window.location.origin})} class="btn btn-primary btn-sm w-50">Logout</button>
              </Nav>
              <Nav>
             {
                
                
                 estado === true?

                 <Link  to={`/home/resto/setting/${restoId}`}>
                   <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                   <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                   <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                   </svg>
                   </Link>

                 :
                
                   <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                   <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                   <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                   </svg>
                
                

                  

             }     
            
              </Nav>
              </Nav>
             </Navbar.Collapse>
            </Container>
           </Navbar>
           <Container>
            <Row>
            <Col>
             <AutorizaMesa restoId={restoId}/>
             <div>
                 {
                     estado === false ?
                     
                         <div>
                             <p>Su restaurante no se encuentra habilitado para usar la APP</p>
                         </div>
                     
                     :
                     null
                 }
                 
             </div>
             
                {
                 clientes?.map(el =>{
                    {
                        el.nuevoPedido === true ? className = 'danger' : className = 'light'
                        
                    }
                    return(
                            <div>
                                
                                <Card  style={{ width: '15rem' }}>
                                    
                               <ListGroup>
                                <ListGroup.Item variant={className}>
                                    
                                <h5 className={global.textpedido}>{el.mesa.name}</h5>
                                <p className={global.nombreCliente}>{el.nombre}</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-sm-end"  className={className}>
                                <button className="btn btn-primary btn-sm" value={el.id} onClick={(e) => handleClick(e,el.id)}>Ver Detalle</button>
                                
                                </div>
                                </ListGroup.Item>
                                </ListGroup>
                                </Card>
                            </div>
                    )
                })
                }
             </Col>
            <Col>
            <div>
                 {
               state === true ?
                <Detalle  idResto={restoId} funcion={setearEstadoFalse}/>
                : 
                
                <></>
               
                 }
                </div>
    </Col>
  </Row>

</Container>
           {/* <div className="row">
             <div className="col-sm">
                <AutorizaMesa restoId={restoId}/>
                <div className="d-grid gap-2 d-md-flex justify-content-sm-center">
                {
                 clientes?.map(el =>{
                    return(
                            <div className={global.whitecardmesasresto}>
                                <h5 className={global.textpedido}>{el.mesa.name}</h5>
                                <p>{el.nombre}</p>
                                <button className="btn btn-primary btn-sm" value={el.id} onClick={(e) => handleClick(e,el.id)}>Ver Detalle</button>
                            </div>
                    )
                })
                }
            </div>
           <div className="col-sm">
                <div>
                 {
               state === true ?
                <Detalle  idResto={restoId} funcion={setearEstadoFalse}/>
                : 
                <h1>Seleccionar mesa</h1>
                 }
                </div>
            </div>
        </div>
        </div> */}
        <br/>
                <footer className={global.footer}>
                <img src={logowhite} height="55px" alt="logo"/>
                </footer>
        </div>

    )
}
