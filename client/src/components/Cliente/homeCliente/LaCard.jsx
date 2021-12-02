import React from "react";
import styles from "./LaCard.module.css"
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";


export default function Card({name, image, id}){ 


    return(
       
        <div className={styles.card}>           
            <h3 className={styles.divName}>{name}</h3>            
            <img src={logo} alt="Logo" width="50%" class="img-fluid"/>
        </div>
        
    )

}