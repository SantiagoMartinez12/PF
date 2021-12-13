import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allResto, deleteResto } from "../../store/actions";
import { useState } from "react";
import styles from "./CardsAdmin.module.css"
import axios from "axios";
import serverFinder from "../../store/deploy/serverFinder";




export default function CardsAdmin({mail,image, name, usuario, id, estado}){ 
    const dispatch = useDispatch()

 
console.log(estado)


   function handleClick(e) {
    // e.preventDefault()
    dispatch(deleteResto(id))
    dispatch(allResto())
   }

               

    function handleSuspender(){    
        
        axios.put(serverFinder('resto'), {id:id, estado: 'suspendido'})
        
    }
    function handleActivar(){    
        
        axios.put(serverFinder('resto'), {id:id, estado: 'autorizado'})
        
    }
    

    let cardContainer
  if(estado === "autorizado"){
      cardContainer = styles.cardContainerOne
  }else{
      cardContainer = styles.cardContainerTwo
  }



   
    return(
        <div >
            
                        
            <div className={cardContainer}>
                
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
                        <div className={styles.divImg}>
                        
                        <p>{estado}</p>                
                        </div>
                    </div>
                
                    <div className={styles.divBotones}>
                    <button onClick={(e)=>{ handleSuspender(e)}} value={id} class="btn btn-outline-danger btn-sm" >Suspender</button>
                    <button onClick={(e)=>{handleActivar(e)}} value={id} class="btn btn-outline-danger btn-sm" >Activar</button>

                    <button onClick={(e)=>{handleClick(e)}} value={id} class="btn btn-danger btn-sm" >Eliminar</button>

                    </div>
            </div>
        </div>
       
    )

}