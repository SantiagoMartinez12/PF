import React from "react";
import styles from "./Card.module.css"


export default function Card({name}){  

    return(
        <div className={styles.card}>           
            <img src={`https://via.placeholder.com/150`} alt="Not found" />

            <h3 className={styles.divName}>{name}</h3>           
        </div>
    )

}