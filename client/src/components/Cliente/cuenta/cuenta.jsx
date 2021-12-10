import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import serverFinder from "../../../store/deploy/serverFinder";
var global = require('../../Resto/global.module.css')

export default function Cuenta(){
    const{idCliente} = useParams()
    const [cuenta, setCuenta]=useState([]);
    const [totalCuenta, setTotalCuenta]=useState(0)
    
    const actualizaCuenta=()=>{
        axios.get(serverFinder(`detalle/idcliente/${idCliente}`))
        .then(res=>{
            // calculo del total a pagar para renderizar
            setCuenta(res.data);
            let total = '';
            let subtotales = [];
            const reducer = (a, b) => a+b;
            if(res.data.length){
                res.data.forEach(it => {
                    subtotales.push(it.precio * it.cantidad)
                });
                total = subtotales.reduce(reducer);
                setTotalCuenta(total)
            } 
        })
    }

    useEffect (actualizaCuenta, []);

    
    // }
    // setTimeout(calculaTotal, 1500)
  
    return(
        <div className="container">
        <div className={global.textsubtitle}>
        <h4>TU CUENTA</h4>
        </div>
            <div className={global.whitecardpedido}>
            {
                cuenta?.map(producto =>{
                    return <div key={producto.id} className="card-body">
                            <h5 className="text-capitalize fw-normal">{producto.name} ${producto.precio}  x  {producto.cantidad}  ${producto.precio * producto.cantidad}</h5>
                        </div>      
                })
            }
                
        </div>
        <br/>
        <div className={global.underlinecard}>
            <h5>TOTAL: ${totalCuenta}</h5>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
             <button className="btn btn-primary me-md-2">PAGAR CUENTA</button>
        </div>
        </div>
       

    )
}