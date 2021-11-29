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
            <h5 class="text-capitalize fw-normal">{name}  ${precio}</h5>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button onClick={handleOnClick} class="btn btn-primary me-md-2" >Agregar</button> 
            </div>
        </div>
    )
}