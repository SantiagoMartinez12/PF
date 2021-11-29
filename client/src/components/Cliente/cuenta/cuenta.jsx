import { useSelector } from "react-redux";


export default function Cuenta(){

    const cuenta = useSelector(state=> state.ticketCuenta); 
    return(
        <div className="container">
        <div>
        <h4>TU CUENTA</h4>
        </div>
            <div class="card">
                {
                cuenta.map(pedido => pedido.map(producto =>{
                    return(
                    <div class="card-body">
                    <h5 class="text-capitalize fw-normal">{producto.name} ${producto.precio} x {producto.cantidad} ${producto.precio * producto.cantidad}</h5>
                    </div>
                    )      
                })
            )
         }
        </div>
        <br/>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button class="btn btn-primary me-md-2">PAGAR CUENTA</button>
        </div>
        </div>
       

    )
}