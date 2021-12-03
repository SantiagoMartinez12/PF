import React, { useEffect, useState } from "react";
import s from "../home/card.module.css"
import {Link} from "react-router-dom"


export default function Card({name, nombreCliente,idCliente, idMesa}){
    console.log(idCliente)
   
    
    return(
        
        <div className={s.gridcontainer}>
            
        <div className={s.card}>
        <Link to= {`/detalle/${idCliente}`} > 
        <div className={s.numero}>{name}---{nombreCliente}</div>

        </Link>
      
        <div className={s.nombre}></div>
        <div className={s.seguimiento}></div>
        
        </div>
</div>
    )
        
}