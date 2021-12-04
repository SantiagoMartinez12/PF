import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from "../home/detalle.module.css"
import { getDetalle, getMesa } from "../../../store/actions";
import {useDispatch, useSelector} from  "react-redux";
import { useNavigate } from 'react-router-dom';


export default function Detalle({idResto,funcion}){
    
    const dispatch = useDispatch();


    const navigate = useNavigate()

   // const {idCliente , idResto} = useParams()
   const  idCliente = useSelector(state => state.idCliente)
    const detalle = useSelector(state => state.detalle)
    const mesa = useSelector(state => state.mesas)
        console.log(detalle)
    //let mesaFind = mesa.find(e => e.id === idMesa)
    // console.log(mesaFind)
    let idMesa = detalle.mesaId
  
    console.log(idCliente)
    useEffect(()=>{

        dispatch(getDetalle(idCliente))
        dispatch(getMesa(idResto)) // id de resto
    },[])
 

    // console.log(detalle)
    let nameCliente = detalle?.map(e => e.namecliente)
    // console.log(nameCliente[0])

    let nameProducto = detalle?.map(e => e.name)
    // console.log(nameProducto)
    let cantidad = detalle?.map(e => e.cantidad )
    let precio = detalle?.map(e => e.precio)

    let seguimiento={}
     seguimiento = detalle?.map(e => {return{seguimiento:e.seguimiento,id:e.id}})
    

 

    const desocuparMesa = (idMesa)=>{
        axios.put('http://localhost:3001/api/mesa', {id:idMesa, estado:false})
        axios.put('http://localhost:3001/api/cliente', {id:idCliente, estado:'finalizado'})
    }
    const handleOnClick = (e) =>{
        e.preventDefault();
        desocuparMesa(idMesa)
        funcion()
        navigate(`/home/resto/${idResto}`)
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
        dispatch(getDetalle(idMesa))
    }
    
    return(
       <div>
           {
           detalle.length === 0 ? <div className="container"><h1>El cliente no realizo su pedido</h1> </div>
                : 
        <div className={s.gridcontainer}>
      
        <div className={s.NameMesa}>
          {/*   <h2>{mesaFind.name}</h2> */}
        </div>
            <div className={s.NameCliente}>
                <h4>Nombre del Cliente: {nameCliente[0]} </h4>
            </div>
            <div className={s.seguimiento}>

            </div>
            <div className={s.pedido}>
            <div className ={s.nameProducto}>
                <h4>Nombre del Producto</h4> 
                <p>{nameProducto.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.cantidad}>
                <h4>Cantidad:</h4>
                <p>{cantidad.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.precio}>
            <h4>Precio:</h4>
                <p>{precio.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.Seguimiento}>
            <h4>Seguimiento:</h4>
                <p>{seguimiento?.map( s=>{
                    return(
                        <div>
                            
                            {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> # </button>}
                        </div>
                    )
                    })}</p>
            </div>
            <div>
                <h5>Desea cerrar mesa?</h5>
                <button onClick={handleOnClick}>Ok</button>
            </div>
        </div>
    </div>
           }
    </div>
    )
}