import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categorias.module.css"
import Card from "./Card";
import { Link } from "react-router-dom";


// const categoria = [{"name": "Bebidas"}, {"name": "Postres"}, {"name": "Pizzas"},]


export default function Categorias(){



    const [categorias, setCategorias] = useState()

    useEffect(() => {
       axios.get("http://localhost:3001/api/categorias/84fb67c6-a5b3-4bb1-9920-986e13375739")
       .then(resp => {setCategorias(resp.data)})            
    }, [])


    //Cada categoria tiene (en el modelo) un id y un name
    // Tengo que renderizar una card con el nombre

    // Tengo que poder modificar mis categorias (agregar una o mas, y borrar una o mas).

    
    console.log(categorias)
   
    return(
        
        <div className={styles.gridContainer}>
            <div className={styles.titulo}>
            <h2>Categorias</h2>
                <Link to={'/home'}>
                    <button className={styles.boton}>Volver</button>
                </Link>
            </div>

            <div className={styles.cardsDiv} >
                {
                    categorias?.map(el => (
                        <Card key={el.id} name={el.name}/>
                    ) )
                }
            </div>

            <div className={styles.tituloCambio}>            
                <Link to={'/'}>
                    <button className={styles.botonCambio}>Agregar</button>
                </Link>
                <Link to={'/'}>
                    <button className={styles.botonCambio}>Modificar</button>
                </Link>
            </div>
            
            
            
        </div>       
        
    )

}