import { useSelector } from "react-redux";




export default function Cuenta(){

    const cuenta = useSelector(state=> state.ticketCuenta); 
    return(
        <div>
            <button>Pagar</button>
            <div>{
                cuenta.map(pedido => pedido.map(producto =>{
                    return(
                    <h3>{producto.name} ${producto.precio} x {producto.cantidad} ${producto.precio * producto.cantidad}</h3>
                    )
                   
                        
                })
                )
                }



        </div>
        </div>
       

    )
}