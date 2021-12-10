import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allResto, deleteResto } from "../../store/actions";
import styles from "./CardsAdmin.module.css"




export default function CardsAdmin({mail,image, name, usuario, id}){ 
    const dispatch = useDispatch()
    

   function handleClick(e) {
    // e.preventDefault()
    dispatch(deleteResto(id))
    dispatch(allResto())
   }

   
    return(
        <div>
                        
            <div className={styles.cardContainer}>
                
                    <div className={styles.divName} >
                        <img src={image} alt="" width="50px" height="50px"/>
                        <h3>{name}</h3>
                        <h3>{usuario}</h3>
                        <p>{mail}</p>                
                    </div>
                
                    <div className={styles.divBotones}>
                    <button onClick={(e)=>{handleClick(e)}} value={id} className={styles.boton} >Eliminar</button>
                    </div>
            </div>
        </div>
    )

}