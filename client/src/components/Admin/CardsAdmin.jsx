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

 
                        <div className={styles.divImg}>
                        <img src={image} alt="" width="50px" height="50px"/>
                        </div>
                        <div className={styles.divImg}>
                        <h3>{name}</h3>
                        </div>
                        <div className={styles.divImg}>
                        <p>{usuario}</p>
                        </div>
                        <div className={styles.divImg}>
                        <p>{mail}</p>                
                        </div>
                    </div>
                
                    <div className={styles.divBotones}>
                    <button onClick={(e)=>{handleClick(e)}} value={id} class="btn btn-outline-danger" >Suspender</button>
                    <button onClick={(e)=>{handleClick(e)}} value={id} class="btn btn-danger" >Eliminar</button>

                    </div>
            </div>
        </div>
    )

}