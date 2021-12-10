import React from "react";
import styles from "./CardsAdmin.module.css"



export default function CardsAdmin({mail}){ 
    
   
   
    return(
        <div>
                        
            <div className={styles.cardContainer}>
                
                    <div className={styles.divName} >
                        <h4>{mail}</h4>                
                    </div>
                
                    <div className={styles.divBotones}>
                    <button className={styles.boton} >Eliminar</button>
                    </div>
            </div>
        </div>
    )

}