import React, { useEffect, useState } from "react";
import styles from "./Categorias.module.css"
import {useDispatch, useSelector} from 'react-redux';
import { agregarCategorias, getCategorias, getProductos } from "../../../store/actions";
import { useParams } from "react-router";



export default function Categorias(){
    const dispatch = useDispatch();
    const {restoId} = useParams()
    const categorias = useSelector((state) => state.categorias)
    const [clickAgregar, setClickAgregar] = useState(false);
    const [nuevaCategoria, setNuevaCategoria] = useState({       
        restoId: restoId
    });
     
    

    useEffect(() => {
        dispatch(getProductos(restoId));

    }, [])


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
        dispatch(agregarCategorias(nuevaCategoria))
        setClickAgregar(false)
        setNuevaCategoria({       
            restoId: restoId
        })
        dispatch(getCategorias(restoId))
          
    }
    function handleChange(e){        
        setNuevaCategoria({...nuevaCategoria, name: e.target.value})
    }    
    

    return(
        
        <div className="container">
            <div className={styles.titulo}>
            <h2>Categorias</h2>
                
            </div>

            <div className={styles.cardsDiv} >
            <ul class="list-group">
            {
                   categorias && categorias?.map(el => (
                    <li key={el.id} class="list-group-item">{el.name} <button type="button" class="btn btn-light btn-sm">✗</button></li>
                    ) )
                }
                
                
            </ul>





                
            </div>

            <div className={styles.tituloCambio}>            
               { clickAgregar=== false ? <button className="btn btn-primary" onClick={(e)=>handleClick(e)} >Agregar</button>:  <><input className="form-control" name="name" onChange={(e)=>handleChange(e)}></input><button disabled={!nuevaCategoria.name} class="btn btn-primary" type="submit" onClick={(e)=>handleSubmit(e)} >Confirmar</button></>
               }                     
            </div>           
            
            
        </div>       
        
    )

}