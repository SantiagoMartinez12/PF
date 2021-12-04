import React, { useEffect, useState } from "react";
import s from "../home/card.module.css"
import {Link} from "react-router-dom"


export default function Card({name, nombreCliente,idCliente, idResto}){
    console.log(idCliente)
    ///home/resto/detalle/:idResto/:idCliente
    //const ruta = idResto + "/detalle/" + idCliente
    return(
        
        <div class="card" width="1rem">
               <Link to= {`/home/resto/detalle/${idResto}/detalle/${idCliente}`}> 
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{nombreCliente}</p>
               
            </div>
            </Link>
        </div>
      /*   <div className={s.gridcontainer}>
            
        <div className={s.card}>
        <Link to= {`/detalle/${idCliente}`} > 
        <div className={s.numero}>{name}---{nombreCliente}</div>

        </Link>
      
        <div className={s.nombre}></div>
        <div className={s.seguimiento}></div>
        
        </div> */

    )
        
}