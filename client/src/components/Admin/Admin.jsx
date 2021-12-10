//traernos la info de todos los resto/Usuario
//nos traemos ruta delete Usuario
//ver como suspendemos pag Resto

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allResto } from "../../store/actions";

import CardsAdmin from "./CardsAdmin.jsx"


export default function SuperAdmin() {
    const restos = useSelector((state) => state.allResto)
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(allResto())
      },[dispatch])


    
      return (
        <div>
          <h1>Admin</h1>
          <br />
          <hr />
          <h3>Usuarios</h3>
          <div>
            {
              restos && restos?.map(el =>{
                return (
                  <h5><CardsAdmin key={el.id} id={el.id} name={el.name} mail={el.mail}/></h5>                  
                )
              })
            }
          </div>
        </div>
    )
}