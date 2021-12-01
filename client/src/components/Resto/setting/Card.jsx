import React from "react";
import { useDispatch } from "react-redux";
import { borrarCategorias } from "../../../store/actions";
import styles from "./Card.module.css"




export default function Card({name, id}){ 
    
    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault();        
        dispatch(borrarCategorias(id))        
    }

    return(
        <div className={styles.card}>  
            <div className={styles.divBotones}>
                <button className={styles.botonEliminar} onClick={(e)=>handleClick(e)}>X</button> 
            </div>         
            <img src={`https://via.placeholder.com/150`} alt="Not found" />

            <h3 className={styles.divName}>{name}</h3>            

        </div>
    )

}