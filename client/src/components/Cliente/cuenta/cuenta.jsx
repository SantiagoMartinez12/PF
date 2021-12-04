import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCuenta } from "../../../store/actions";
import serverFinder from "../../../store/deploy/serverFinder";


export default function Cuenta(){
    const{idCliente} = useParams()
    const dispatch = useDispatch();
   // const cuenta = useSelector(state=> state.ticketCuenta);
    let subtotales = []
    const reducer = (a, b) => a+b;
    let totalCuenta = 0
    let cuenta = []
    useEffect (() =>{
        axios.get(serverFinder(`detalle/idcliente/${idCliente}`))
        .then((response) =>  {cuenta = response.data ;
                            subtotales = response.data.map(el => { 
               return el.precio * el.cantidad 
        }) 
        totalCuenta = subtotales.reduce(reducer)
        }
        )
    }, []);

    // calculo del total a pagar para renderizar
   /*  let subtotales = cuenta?.map(it=>{
        return it.precio * it.cantidad
    })  */
  
    return(
        <div className="container">
        <div>
        <h4>TU CUENTA</h4>
        </div>
            <div class="card">
            {
                cuenta.map(producto =>{
                    return(
                        <div key={producto.id} class="card-body">
                            <h5 class="text-capitalize fw-normal">{producto.name} ${producto.precio} x {producto.cantidad} ${producto.precio * producto.cantidad}</h5>
                        </div>
                        )      
                })
            }
                
        </div>
        <br/>
        <div>
            <h5>Total a pagar: ${totalCuenta}</h5>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button class="btn btn-primary me-md-2">PAGAR CUENTA</button>
        </div>
        </div>
       

    )
}