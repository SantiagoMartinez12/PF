// renderizar el estado "estado global de pedido"
// debe mostrar producto cantidad y precio y un boton para eliminar renglón
// mostrar total del pedido
// boton modificar pedido -- te vuelve a la carta
// boton eliminar pedido -- resetea todo el pedido
// boton confirmar pedido --- hace el post al back con el pedido

import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { agregarTicket, resetTicket, restaCuenta, restarTicket, sumaCuenta } from '../../../store/actions';

import serverFinder from '../../../store/deploy/serverFinder';

import Carrousel from '../carta/Carrousel';
var global = require('../../Resto/global.module.css')



export default function DetallePedido(){
    
    const [input,setInput] = useState("")

    const ticket = useSelector(state=> state.ticket);
    const cuenta = useSelector(state=> state.cuenta);
    const infoCliente = useSelector(state=> state.ClientInfo);
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
         ticket.forEach(el => {el.comentario = input 
            post.push(el)})
        
         axios.post(serverFinder('detalle'), post)
         dispatch(resetTicket())

        
    }
    return(
    <div className="container"> 
        <Carrousel/>
        <div>
        <center>
        <h2  className={global.textsubtitle}>TU PEDIDO</h2>
        </center>
        </div>
        <div className={global.whitecardpedido}>
        {ticket.map(it=>{
            return( it.cantidad>0?
                <div key={it.id} className="p-3 mb-2  text-black">
                    <h5 className={global.textpedido}>{it.name} ${it.precio} x {it.cantidad} <br/> Subtotal: ${it.precio * it.cantidad}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick = {()=>handleOnClickMenos(it.id, it.precio)} className="btn btn-outline-primary">-</button>
                    <button onClick = {()=>handleOnClickMas(it.id, it.precio)} className="btn btn-outline-primary">+</button>
                    </div> 
                </div>
                :null
            )
        })}
        </div>
        <br/>      
        <div className="input-group mb-3">
            <input placeholder="Agrega una nota al restaurante (salsa tradicional, servir sin chile...)" class="form-control"
                        value={input}
                    onChange={(e) => handleInputChange(e)}
            />
            <br/>
            {infoCliente.estadoCliente === 'solicitado'?
            <button  className="btn btn-primary" disabled >PEDIR</button>
            :
            <button  onClick={(e) => handleSubmit(e)} className="btn btn-primary">PEDIR</button> 
            }
            </div>
        <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
            <div className={global.underlinecard}>
            <h5>TOTAL: ${cuenta}</h5>
            </div>
        </div>
        
        
    </div>     
    )
}