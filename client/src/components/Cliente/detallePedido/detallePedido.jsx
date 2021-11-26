// renderizar el estado "estado global de pedido"
// debe mostrar producto cantidad y precio y un boton para eliminar renglón
// mostrar total del pedido
// boton modificar pedido -- te vuelve a la carta
// boton eliminar pedido -- resetea todo el pedido
// boton confirmar pedido --- hace el post al back con el pedido

import axios, { Axios } from 'axios';
import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { agregarTicket, resetTicket, restaCuenta, restarTicket, sumaCuenta, ticketCuenta } from '../../../store/actions';



export default function DetallePedido(){
    
    const [input,setInput] = useState("")

    const ticket = useSelector(state=> state.ticket);
    const cuenta = useSelector(state=> state.cuenta);
    const dispatch = useDispatch();

    const handleOnClickMas=(id, precio)=>{
        dispatch(agregarTicket(id))
        dispatch(sumaCuenta(precio))
    }

    const handleOnClickMenos=(id, precio)=>{
        dispatch(restarTicket(id))
        dispatch(restaCuenta(precio))
    }
    function handleInputChange(e) {
        e.preventDefault();
        setInput(e.target.value);

    }
    
     function handleSubmit (e){
        e.preventDefault();
        let post = []
         ticket.map(el => {el.comentario = input 
            post.push(el)})
        console.log(post)
        axios.post('http://localhost:3001/api/detalle', post)
        dispatch(ticketCuenta(ticket))
        dispatch(resetTicket())

        
        
        
        /*
            nameCliente:state.ClientInfo.nameCliente,
              idResto:state.ClientInfo.idResto,
              idMesa:state.ClientInfo.idMesa
         */ 
    }
    return(
    <div>
        <br/>
            Tu pedido
        <br/>
        {ticket.map(it=>{
            return( it.cantidad>0?
                <div key={it.id}>
                    <h3>{it.name} ${it.precio} x {it.cantidad} ${it.precio * it.cantidad}</h3>
                    <button onClick = {()=>handleOnClickMas(it.id, it.precio)}>+</button>
                    <button onClick = {()=>handleOnClickMenos(it.id, it.precio)}>-</button>
                </div>
                :null
            )
        })}
        <br/>
        <div>
            <h2>Total a pagar ${cuenta}</h2>
        </div>
    
            
        
        <div>
            <input placeholder="Agregar Comentario.."
                        value={input}
                    onChange={(e) => handleInputChange(e)}
            />
            <br/>
            <button onClick={(e) => handleSubmit(e)}>Pedir</button>
           
        </div>
         
    </div>     
    )
}