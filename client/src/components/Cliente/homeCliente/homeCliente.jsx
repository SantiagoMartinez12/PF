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



export default function HomeClient(){

    
    let param = useParams()
    
    let name = param.name
    // este estado en false muestra el detalle y en true muestra la carta
       const [ state, setState] = useState(false)
        function handleClickPedido(e){
          setState(false)
        }
        function handleClickPedidoMenu(e){
        setState(true)
        }

    
    return <div>

            <h1>Bienvenido/a {name} </h1>

            <button onClick={e => {handleClickPedido(e)}}>Ver Pedido</button> 
            <button onClick={e => {handleClickPedidoMenu(e)}}>Ver Menu</button>
            <br/>
            {
                !state ? <DetallePedido/> : <Carta/>
            }
    </div>
}