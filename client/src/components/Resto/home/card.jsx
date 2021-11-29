import React from "react";
import s from "../home/Card.module.css"


export default function Card({name, seguimiento}){
   

    return(
        
        <div className={s.gridcontainer}>
            
        <div className={s.card}>
        <div className={s.numero}></div>
        <div className={s.nombre}>{name}</div>
        <div className={s.seguimiento}>{seguimiento}</div>
        
        </div>
</div>
    )
        
}