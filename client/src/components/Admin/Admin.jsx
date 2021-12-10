//traernos la info de todos los resto/Usuario
//nos traemos ruta delete Usuario
//ver como suspendemos pag Resto

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allResto } from "../../store/actions";
import AutorizaResto from "./AutorizaResto";
import CardsAdmin from "./CardsAdmin"


export default function SuperAdmin() {
    const restos = useSelector((state) => state.allResto)
    const dispatch = useDispatch() 
    
    useEffect(()=>{
        dispatch(allResto())
      },[dispatch])


      console.log(restos)
    
      return (
        <div>
          <h2>Admin</h2>
          <AutorizaResto/>
          <br />
          <hr />
          <h3>Usuarios</h3>
          <ul>
            {
              restos && restos?.map(el =>{
                return (
                  <li><CardsAdmin key={el.id} name={el.name} mail={el.mail}/></li>                  
                )
              })
            }
          </ul>
        </div>
    )
}