// renderizar el estado "estado global de pedido"
// debe mostrar producto cantidad y precio y un boton para eliminar renglón
// mostrar total del pedido
// boton modificar pedido -- te vuelve a la carta
// boton eliminar pedido -- resetea todo el pedido
// boton confirmar pedido --- hace el post al back con el pedido
import './detallePedido.css';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { agregarTicket, resetTicket, restaCuenta, restarTicket, setPedidoModificado, sumaCuenta } from '../../../store/actions';
import serverFinder from '../../../store/deploy/serverFinder';
import Carrousel from '../carta/Carrousel';
var global = require('../../Resto/global.module.css')



export default function DetallePedido(){
    
    const [input,setInput] = useState("")
    const { idCliente } = useParams();
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

    function updateEstadoPedido(){
        let repet = setInterval(()=>{
            axios.get(serverFinder(`cliente/cliente/${idCliente}`))
            .then(res=>{
                if(res.data.pedidoModificado){
                    dispatch(setPedidoModificado(res.data.pedidoModificado));
                    // clearInterval(repet);
                }       
    // limpia el interval cuando el cliente está finalizado                
                if(res.data.estado === 'finalizado'){
                    clearInterval(repet);
                }
            })
          }          
        , 2000);
    }
    
    
    function handleSubmit (e){
        e.preventDefault();
        let post = []
        ticket.forEach(el => {el.comentario = input 
            post.push(el)})
    // postea el detalle con el pedido    
        axios.post(serverFinder('detalle'), post)
    //modifica la propiedad nuevoPedido del cliente en true y agrega el comentario
        axios.put(serverFinder('cliente'), {nuevoPedido: true, id: infoCliente.idCliente, comentario: input})
    //resetea el pedido
        dispatch(resetTicket())
    //resetea la propiedad pedidoModificado del cliente
        // axios.put(serverFinder('cliente'), { id: idCliente, pedidoModificado: '' })
    //lanza la función para que quede "escuchando" por alguna modificación en el pedido
        updateEstadoPedido();
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
                // <div key={it.id} className="p-3 mb-2  text-black">
                <div key={it.id} className="item  text-black">
                    <div className='item_producto'>    
                        <h6 className={global.textpedido}>{it.name}</h6>
                        <h6 id='precio_item' className={global.textpedido}>${it.precio.toLocaleString()},00</h6>
                    </div>
                    <div className='item_subtotal'>
                        <button onClick = {()=>handleOnClickMenos(it.id, it.precio)} className="boton_mas_menos">-</button>
                        <h6 className='item_cantidad'> {it.cantidad} </h6>
                        <button onClick = {()=>handleOnClickMas(it.id, it.precio)} className="boton_mas_menos">+</button>
                        <h6 id='subtotal_item'> ${(it.precio * it.cantidad).toLocaleString()},00</h6>
                    </div>
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    </div>  */}
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
            <h5>TOTAL: ${cuenta.toLocaleString()},00</h5>
            </div>
        </div>
        
        
    </div>     
    )
}