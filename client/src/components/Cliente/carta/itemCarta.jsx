import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTicket, sumaCuenta } from '../../../store/actions';




export default function ItemCarta ({data}){
    const dispatch = useDispatch();

    const {id, name, precio, imagen, detalle, categoria} = data;
    
    const handleOnClick=(e)=>{
        e.preventDefault();
        dispatch(agregarTicket(id))
        dispatch(sumaCuenta(precio))
    }
    

    return(
        <div>
            <h3>{name}  ${precio}</h3>
            <button onClick={handleOnClick}>Agregar</button> 
        </div>
    )
}