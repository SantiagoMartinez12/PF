import React from "react";
import { useDispatch } from "react-redux";
import { borrarCategorias, getCategorias } from "../../../store/actions";
import styles from "./Card.module.css"
import { useParams } from "react-router";




export default function Card({name, id}){ 
    
    const dispatch = useDispatch()
    const {restoId} = useParams()
    function handleClick(e){       
        dispatch(borrarCategorias(id))
        dispatch(getCategorias(restoId))        
    }

    return(
        <div className={styles.card}>  
            <div className={styles.divBotones}>
                <button class="btn btn-primary" onClick={(e)=>handleClick(e)}>X</button> 
            </div>         
            <img src={`https://via.placeholder.com/150`} alt="Not found" />

            <h3 className={styles.divName}>{name}</h3>            

        </div>
    )

}