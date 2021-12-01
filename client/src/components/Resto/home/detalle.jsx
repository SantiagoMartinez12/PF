import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import s from "../home/detalle.module.css"
import { getDetalle, getMesa } from "../../../store/actions";
import {useDispatch, useSelector} from  "react-redux";


export default function Detalle(){
    
    const dispatch = useDispatch();

    const {idMesa} = useParams()
    const detalle = useSelector(state => state.detalle)
    const mesa = useSelector(state => state.mesas)

    let mesaFind = mesa.find(e => e.id === idMesa)
    // console.log(mesaFind)
  
 
    useEffect(()=>{
        dispatch(getDetalle(idMesa))
        dispatch(getMesa("397799a7-45df-4051-a12d-e880cdd59c0b"))

    },[])

    // console.log(detalle)
    let nameCliente = detalle?.map(e => e.namecliente)
    // console.log(nameCliente[0])

    let nameProducto = detalle?.map(e => e.name)
    // console.log(nameProducto)
    let cantidad = detalle?.map(e => e.cantidad )
    let precio = detalle?.map(e => e.precio)
    let seguimiento = detalle?.map(e => e.seguimiento)


    return(
    <div className={s.gridcontainer}>
        <div className={s.NameMesa}>
            <h2>{mesaFind.name}</h2>
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
                <p>{seguimiento.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
        </div>
    </div>
    )
}