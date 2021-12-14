
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import serverFinder from "../../../store/deploy/serverFinder";
import {useMercadopago} from "react-sdk-mercadopago";
import { useDispatch, useSelector } from "react-redux";
import { infoUsuario } from "../../../store/actions";

var global = require('../../Resto/global.module.css')
let idpago = ''


export default function Cuenta(){
    const{idCliente, idResto} = useParams()
    const [cuenta, setCuenta]=useState([]);
    const [totalCuenta, setTotalCuenta]=useState(0)
    const dispatch = useDispatch();
    const usuario = useSelector(state => state.usuario)
    const token = usuario[0]?.accesstoken

   
    useEffect (()=>{ 
    dispatch(infoUsuario(idResto))},
    [dispatch])

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
    //console.log(usuario)
    if (usuario[0]) {
        var mercadopago = useMercadopago.v2(usuario[0]?.publickey, {
        locale: 'es-AR',
    })} // Instancia para Mercado Pago

    //Esta función manda el objeto capturado con el número de la cuenta al back y hace la peticion
    //de una preferencia a la API de MP, recibe un id y este es enviado a la funcion para
    //crear el Checkout, una vez allí inicializa la terminal de MP
    function pagarCuenta(e) {
        e.preventDefault()
        // console.log("entre")
        if(idpago.length===0){
            //console.log("Entre al if")
            const cuenta = {
                idCliente: idCliente,       //agregado por Leo
                title: "Total de cuenta",
                unit_price: Number(totalCuenta),
                quantity: 1,
                token: token
            }      
            axios.post (serverFinder(`api/mercadopago/preference`), cuenta)
            .then((response)=>{
                idpago= response.data
                console.log(idpago + "Estoy dentro del .then")
                createCheckout(idpago)
            }) //Manda llamar la ruta y le pasa un objeto para crear una preferencia
        }
    }

    function createCheckout(idpago){ // Inicializa el carrito de compras
       // console.log("soy el id", idpago) 
        mercadopago.checkout({
               preference: {
                id: idpago
               },
               render: {
               container: '.button-checkout', // Aqui se muestra el botón
               label: 'Pagar por Mercado Libre', // Este es el texto que se le da al boton de Mercado Libre
            }
        });
    }
    
    return(
        <div className="container">
          <script src="https://sdk.mercadopago.com/js/v2" type="text/javascript"></script>

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
             <button className="btn btn-primary me-md-2"  onClick={(e) => {pagarCuenta(e)}}>GENERAR PAGO</button>
             <div class="button-checkout"></div>
          </div>
        </div>
    )
}