// renderizar el estado "estado global de pedido"
// debe mostrar producto cantidad y precio y un boton para eliminar renglón
// mostrar total del pedido
// boton modificar pedido -- te vuelve a la carta
// boton eliminar pedido -- resetea todo el pedido
// boton confirmar pedido --- hace el post al back con el pedido

import react from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { agregarTicket, restaCuenta, restarTicket, sumaCuenta } from '../../../store/actions';



export default function DetallePedido(){

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
            <button>Confirmar Pedido</button>
        </div>
         
    </div>     
    )
}