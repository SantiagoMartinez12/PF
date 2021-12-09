//traernos la info de todos los resto/Usuario
//nos traemos ruta delete Usuario
//ver como suspendemos pag Resto

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allResto, infoUsuario } from "../store/actions";


export default function SuperAdmin() {
    const restos = useSelector((state) => state.allResto)
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(allResto())
      },[dispatch])
    
      return (
        <div>Tramita el culiau en tu dependecia culiau mas cercana </div>
    )
}