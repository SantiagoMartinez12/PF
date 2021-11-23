// traer el estado menu
// select con las categorías de producto
// estado ProductosMostrados se carga con los productos filtrados en base al select anterior
// mapear y renderizar el array de ProductosMostrados
//////// Para agregar ///// mostrar un detalle del producto /////////
// cada producto debe tener: Nombre --- precio --- input cantidad      - 0 +
// Estado local para ir guardando el pedido antes del submit
// boton "Finalizar pedido"  
// en la store debe haber un estado con el detalle del pedido que se actualiza con el submiteo anterior

import react, { useState } from 'react';

import Buscador from './Buscador'
import { useDispatch, useSelector } from 'react-redux'
import { filtroProductos, sumaTicket } from '../../../store/actions';


export default function Carta({verPedido}){
    
    

    // const productos = useSelector(state => state.menuBaseDatos);
    const categorias = useSelector(state => state.categoriasMenu);
    const filtrados = useSelector(state=> state.productosFiltrados)

    const dispatch = useDispatch();

    const[input, setInput]= useState({})

    const handleOnClick=(e)=>{
        dispatch(filtroProductos(e.target.value))

    }

    const handleOnChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(sumaTicket(input));
        setInput({})
        verPedido();
    }


    return(
    <div>
        <Buscador />
        <br/>
            {categorias?.map(c=>{
                return(
                <button key={c} value={c} onClick= {handleOnClick}>{c}</button>
                )})}
        <br/>
        <form onSubmit= {handleOnSubmit}>
            {filtrados?.map(p=>{
                return(
                    <div key={p.name}>
                        {p.name} ${p.precio} <input name={p.name} type="number" min='0' value={input[p.name]} onChange={handleOnChange}></input>  
                    </div>
                )
            })}
            <button type='submit'>Finalizar pedido</button>
        </form>

       
         
    
    
    
    
    </div>
    )
}


