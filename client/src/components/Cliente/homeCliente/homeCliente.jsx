// traerse el nombre
// mensaje personalizado "Hola Pedrito qué querés hacer"
// tener una navbar con las opciones:
//                                    Ver carta
//                                    Ver tu pedido
// en base a lo que se seleccione renderizar un componente u otro


import React, { useState } from 'react'
import { useParams } from 'react-router'
import Carta from '../carta/carta.jsx'
import DetallePedido from '../detallePedido/detallePedido.jsx'
import { useEffect } from 'react'
import { getDatosMesa } from '../../../store/actions/index.js'
import { useDispatch } from 'react-redux'
import Cuenta from '../cuenta/cuenta.jsx'



export default function HomeClient(){

    const{name,idResto,idMesa} = useParams()
    const dispatch = useDispatch()
   // let {name} = useParams()
    const cliente = {
        nameCliente:name,
        idResto:idResto,
        idMesa:idMesa
    }
   //let name = param.name
    useEffect (() =>{
        dispatch(getDatosMesa(cliente))
    }, [dispatch]);
    // este estado en false muestra el detalle y en true muestra la carta
       const [ state, setState] = useState("ver pedido")
        function handleClickPedido(e){
          setState("ver pedido")
        }
        function handleClickPedidoMenu(e){
        setState("ver menu")
        }
        function handleClickPedidoCuenta(e){
            setState("ver cuenta")
            }

    
    return <div>

            <h1>Bienvenido/a {name} </h1>

            <button onClick={e => {handleClickPedido(e)}}>Ver Pedido</button> 
            <button onClick={e => {handleClickPedidoMenu(e)}}>Ver Menu</button>
            <button onClick={e => {handleClickPedidoCuenta(e)}}>Ver Cuenta</button>
            <br/>
            {
                state === "ver pedido" ? <DetallePedido/> : state === "ver menu" ? <Carta/> :  <Cuenta/> 
                
            }
    </div>
}