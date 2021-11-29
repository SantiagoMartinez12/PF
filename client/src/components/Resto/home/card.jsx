import React from "react";
import s from "../home/card.module.css"


export default function Card({name, nameCliente,seguimiento}){
   

    return(
        
        <div className={s.gridcontainer}>
            
        <div className={s.card}>
           
        <div className={s.numero}>{name}</div>
      
        <div className={s.nombre}></div>
        <div className={s.seguimiento}></div>
        
        </div>
</div>
    )
        
}