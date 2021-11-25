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
import { filtroProductos } from '../../../store/actions';
import ItemCarta from './itemCarta';


export default function Carta(){

    const categorias = useSelector(state => state.categoriasMenu);
    const filtrados = useSelector(state=> state.productosFiltrados)
    

    const dispatch = useDispatch();
    const handleOnClick=(e)=>{
        dispatch(filtroProductos(e.target.value))

    }

    return(
        <div>
            <Buscador />
            <br/>
                {categorias?.map(c=>{
                    return(
                    <button key={c.id} value={c.name} onClick= {handleOnClick}>{c.name}</button>
                    )})}
            <br/>
                {filtrados?.map(p=>{
                    return(
                        <div key={p.id}>
                            <ItemCarta data={p}/> 
                        </div>
                    )
                })}
        </div>
    )
}


