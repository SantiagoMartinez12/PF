import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categorias.module.css"
import Card from "./Card";
import {useDispatch, useSelector} from 'react-redux';
import { agregarCategorias, getCategorias } from "../../../store/actions";
import { useParams } from "react-router";



export default function Categorias(){
    const dispatch = useDispatch();
    // const restoId = useSelector((state) => state.usuario)
    const {restoId} = useParams()
    const [clickAgregar, setClickAgregar] = useState(false);
    const [nuevaCategoria, setNuevaCategoria] = useState({
        name: "",
        restoId: restoId

    });
    
    const categorias = useSelector((state) => state.categorias)
   
    useEffect(() => {

        dispatch(getCategorias(restoId));            

    }, [])
    

    function handleClick(e){
        if(clickAgregar===false){
            setClickAgregar(true)
        } else {
            setClickAgregar(false)
        }

    }
    function handleSubmit(e){
        e.preventDefault();
        setClickAgregar(false)
        
        dispatch(agregarCategorias(nuevaCategoria))
        dispatch(getCategorias(restoId))
              
    }
    function handleChange(e){
        console.log(e.target.value)
        setNuevaCategoria({...nuevaCategoria, name: e.target.value})
    }


   
    return(
        
        <div className={styles.gridContainer}>
            <div className={styles.titulo}>
            <h2>Categorias</h2>
                
            </div>

            <div className={styles.cardsDiv} >
                {
                    categorias?.map(el => (
                        <Card key={el.id} id={el.id} name={el.name} />
                    ) )
                }
            </div>

            <div className={styles.tituloCambio}>            
               { clickAgregar=== false ? <button onClick={(e)=>handleClick(e)} className={styles.botonCambio}>Agregar</button>:  <><input name={"categoria"} onChange={handleChange}></input><button type="submit" onClick={handleSubmit} >Confirmar</button></>
               }                     
            </div>           
            
            
        </div>       
        
    )

}