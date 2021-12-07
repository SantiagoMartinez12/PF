import React, { useEffect, useState } from "react";
import styles from "./Categorias.module.css"
import Card from "./Card";
import {useDispatch, useSelector} from 'react-redux';
import { agregarCategorias, getCategorias } from "../../../store/actions";
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
        dispatch(getCategorias(restoId))
        setNuevaCategoria({       
            restoId: restoId
        })
        if (window.confirm("Se ha agregado una nueva categoria")) {
            window.location.reload()
        } else {
            window.location.reload()
        };
        
              
    }
    function handleChange(e){
        // console.log(e.target.value)
        setNuevaCategoria({...nuevaCategoria, name: e.target.value})
    }

    // console.log(categorias)
   
    return(
        
        <div className="container">
            <div className={styles.titulo}>
            <h2>Categorias</h2>
                
            </div>

            <div className={styles.cardsDiv} >
                {
                   categorias && categorias?.map(el => (
                        <Card key={el.id} id={el.id} name={el.name} />
                    ) )
                }
            </div>

            <div className={styles.tituloCambio}>            
               { clickAgregar=== false ? <button className="btn btn-primary" onClick={(e)=>handleClick(e)} >Agregar</button>:  <><input className="form-control" name="name" onChange={(e)=>handleChange(e)}></input><button disabled={!nuevaCategoria.name} class="btn btn-primary" type="submit" onClick={(e)=>handleSubmit(e)} >Confirmar</button></>
               }                     
            </div>           
            
            
        </div>       
        
    )

}