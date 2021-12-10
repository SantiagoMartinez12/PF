import React from "react";
import styles from "./CardsAdmin.module.css"



export default function CardsAdmin({mail,image, name, usuario}){ 
    
   
   
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
                    <button className={styles.boton} >Eliminar</button>
                    </div>
            </div>
        </div>
    )

}