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
   /*      console.log(detalle)
     mesaFind = mesa.find(e => e.id === idMesa)
     console.log(mesaFind) */ 
     
     
     
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
        
        
        
        
        let idMesa = detalle[0].mesaId
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
        dispatch(getDetalle(idCliente))
    }
    
    return(
       <div>
          
        <div className={s.gridcontainer}>
      
        <div className={s.NameMesa}>
          {/*   <h2>{mesaFind.name}</h2> */}
        </div>
            <div className={s.NameCliente}>
                <h4 class="text-center">Cliente</h4>
                <p class="text-center">{nameCliente[0]}</p>
            </div>
            
            <div className={s.pedido}>
            <div className ={s.nameProducto}>
                <h5>Producto</h5> 
                <p>{nameProducto.map( e=>{
                    return(
                        <div className={s.e}>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.cantidad}>
                <h5>Cantidad</h5>
                <p>{cantidad.map( e=>{
                    return(
                        <div className={s.ee}>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.precio}>
            <h5>Precio</h5>
                <p>{precio.map( e=>{
                    return(
                        <div className={s.ee}>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className={s.Seguimiento}>
            <h5>Seguimiento</h5>
                <p>{seguimiento?.map( s=>{
                    return(
                        <div className={s.el}>
                            
                           {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button type="button" class="btn btn-outline-success btn-sm" onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✔ </button>}
                        </div>
                    )
                    })}</p>
            </div>
            
            
            <div className={s.cerrarMesa}>
               <p> Desea cerrar mesa?</p>
                <button type="button" class="btn btn-primary btn-sm" onClick={handleOnClick}>Ok</button>
            </div>
        </div>
    </div>
           
    </div>
    )
}