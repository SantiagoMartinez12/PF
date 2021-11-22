// traerse el nombre
// mensaje personalizado "Hola Pedrito qué querés hacer"
// tener una navbar con las opciones:
//                                    Ver carta
//                                    Ver tu pedido
// en base a lo que se seleccione renderizar un componente u otro


import React, { useState } from 'react'
import Carta from '../carta/carta.jsx'
import DetallePedido from '../detallePedido/detallePedido.jsx'



export default function HomeClient(){
       const [ state, setState] = useState(false)
        function handleClickPedido(e){
          setState(false)
        }
        function handleClickPedidoMenu(e){
        setState(true)
        }
    return <div>

            <h1>Bienvenido/a  Martaaa </h1>

            <button onClick={e => {handleClickPedido(e)}}>Ver Pedido</button> 
            <button onClick={e => {handleClickPedidoMenu(e)}}>Ver Menu</button>
            <br/>
            {
                !state ? <DetallePedido/> : <Carta/>
            }
    </div>
}