import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from "../home/detalle.module.css"
import { getDetalle, getMesa } from "../../../store/actions";
import {useDispatch, useSelector} from  "react-redux";
import {Navbar, Container, Nav, Button, NavDropdown, Row, Col, Table} from 'react-bootstrap';
var global = require('../../Resto/global.module.css')

export default function Detalle({idResto,funcion}){
    
    const dispatch = useDispatch();
   // const {idCliente , idResto} = useParams()
   const  idCliente = useSelector(state => state.idCliente)
    const detalle = useSelector(state => state.detalle)
    const mesa = useSelector(state => state.mesas)
    const [msj,setMsj] = useState(false)
   /*      console.log(detalle)
     mesaFind = mesa.find(e => e.id === idMesa)
     console.log(mesaFind) */
    let idMesa = detalle.map(e => e.mesaId)

    useEffect(()=>{

       
        dispatch(getMesa(idResto)) // id de resto
    },[])
    useEffect(()=>{

        dispatch(getDetalle(idCliente))
     // id de resto
    },[idCliente])

    // console.log(detalle)
    let nameCliente = detalle?.map(e => e.namecliente)
    // console.log(nameCliente[0])

    let nameProducto = detalle?.map(e => e.name)
    // console.log(nameProducto)

    let cantidad = detalle?.map(e => e.cantidad )
    console.log(cantidad)
    let precio = detalle?.map(e => e.precio)

    let seguimiento={}
     seguimiento = detalle?.map(e => {return{seguimiento:e.seguimiento,id:e.id}})
     
    const desocuparMesa = (idMesa)=>{
        axios.put('http://localhost:3001/api/mesa', {id:idMesa, estado:false})
        axios.put('http://localhost:3001/api/cliente', {id:idCliente, estado:'finalizado'})
    }
    
    const handleOnClick = (e) =>{
        e.preventDefault();
        let vali = false
        let validacion = seguimiento.map(e => e.seguimiento)
        for(let i=0; i<validacion.length; i++){
            if(validacion[i] === 'entregado'){
                vali = true
            }
        }
        if(vali || nameProducto.length === 0) {
            desocuparMesa(idMesa[0])
            funcion()
            dispatch(getMesa(idResto))
            alert("Su mesa se cerro correctamente")
        } else {
           setMsj(true)
        }

    }

    function handleClickSeguimiento(seguimiento,id){
      
        let segui = seguimiento
        if(segui === 'solicitado'){
            segui = 'confirmado'
        }
        else if( segui === 'confirmado'){
            segui = 'entregado'
        }
        
       let seguimientoPut = {id:id, seguimiento:segui}
        console.log(seguimientoPut)
        axios.put("http://localhost:3001/api/detalle/seguimiento", seguimientoPut)
        dispatch(getDetalle(idCliente))
    }
    
    return(
       <div class="container">
        <div>
          {/*   <h2>{mesaFind.name}</h2> */}
        </div>
            <div>
                <h4 class="text-center">Cliente</h4>
                <p class="text-center">{nameCliente[0]}</p>
            </div>

            {/* <div class="row">
                <div class="col-sm">
                <h5>Producto</h5> 
                <p>{nameProducto.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
                </div>
            </div>
            <div class="col-sm">
                <h5>Cantidad</h5>
                <p>{cantidad.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div class="col-sm">
            <h5>Precio</h5>
                <p>{precio.map( e=>{
                    return(
                        <div >
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div class="col-sm">
            <h5>Seguimiento</h5>
                <p>{seguimiento?.map( s=>{
                    return(
                        <div >
                           {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button type="button" class="btn btn-outline-success btn-sm" onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✔ </button>}
                        </div>
                    )
                    })}</p>
            </div> */}

  <Table responsive>
  <thead>
    <tr>
      <th>Productos</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Seguimiento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>
    <ul class="list-group list-group-flush">
                <p>{nameProducto.map( e=>{
                    return(
                        <li class="list-group-item">
                            {e}
                        </li>
                    )
                    })}</p>
                </ul>
        </td>
    <td>  
      <ul class="list-group list-group-flush">
            <p>{cantidad.map( e=>{
                    return(
                        <li class="list-group-item">
                            {e}
                        </li>
                    )
                    })}</p>
                </ul>
    </td>
    <td>  
            <ul class="list-group list-group-flush">
            <p>{precio.map( e=>{
                    return(
                        <li class="list-group-item">
                            {e}
                        </li>
                    )
                    })}</p>
                </ul>
    </td>
    <td>  
            <ul class="list-group list-group-flush">
            <p>{seguimiento?.map( s=>{
                    return(
                        <li class="list-group-item">
                           {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button type="button" class={global.botonflechita} onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✓ </button>}
                        </li>
                    )
                    })}</p>
                </ul>
    </td>
    </tr>
  </tbody>
    </Table>
        <center>
        <div class={global.whitecardmesasresto}>
                <center>
                <p class={global.textnotification}> ¿Desea cerrar la mesa? </p>
                <button type="button" class="btn btn-primary btn-sm" onClick={handleOnClick}>Si, cierrala</button>
                {
                    msj === true ? <p>Hay productos que no se han pagado</p> : null
                }
                </center>
            </div>
            </center>
        </div>
        
        
    )
}