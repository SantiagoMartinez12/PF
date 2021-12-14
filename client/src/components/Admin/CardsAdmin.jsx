import React from "react";
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
        <div className={styles.gridContainer}>            
            <div className={cardContainer}>
                
                        <div className={styles.divImg}>
                        <img src={image} alt="" width="50px" height="50px"/>
                        </div>
                        <div className={styles.nombreResto}>
                        <h3>{name}</h3>
                        </div>
                        <div className={styles.mail}>
                        <p>{mail}</p>                
                        </div>
                        <div className={styles.estado}>
                        <p>{estado}</p>                
                        </div>
                    <div className={styles.botones}>
                    <div className={styles.suspender}>
                        <button onClick={(e)=>{handleSuspender(e)}} value={id} class="btn btn-outline-danger btn-sm mx-2" >Suspender</button>
                    </div>
                    <div className={styles.activar}>
                        <button onClick={(e)=>{handleActivar(e)}} value={id} class="btn btn-outline-success btn-sm mx-2" >Activar</button>
                    </div>
                    <div className={styles.eliminar}>
                        <button onClick={(e)=>{handleClick(e)}} value={id} class="btn btn-danger btn-sm mx-2" >Eliminar</button>
                    </div>

                    </div>
            </div>
        </div>
       
    )

}