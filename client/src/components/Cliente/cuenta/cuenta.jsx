import './cuenta.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import serverFinder from "../../../store/deploy/serverFinder";
import { useMercadopago } from "react-sdk-mercadopago";

var global = require('../../Resto/global.module.css')
let idpago = ''


export default function Cuenta(parametros) {

    const { idCliente } = useParams()
    const [cuenta, setCuenta] = useState([]);
    const [totalCuenta, setTotalCuenta] = useState(0)
    const token = parametros.usuario.accesstoken;
    const key = parametros.usuario.publickey;

    const actualizaCuenta = () => {
        axios.get(serverFinder(`detalle/idcliente/${idCliente}`))
            .then(res => {
                // calculo del total a pagar para renderizar
                setCuenta(res.data);
                let total = '';
                let subtotales = [];
                const reducer = (a, b) => a + b;
                if (res.data.length) {
                    res.data.forEach(it => {
                        subtotales.push(it.precio * it.cantidad)
                    });
                    total = subtotales.reduce(reducer);
                    setTotalCuenta(total)
                }
            })
    }

    useEffect(actualizaCuenta, []);


    const mercadopago = useMercadopago.v2(key, {
        locale: 'es-AR',
    })


    //Esta función manda el objeto capturado con el número de la cuenta al back y hace la peticion
    //de una preferencia a la API de MP, recibe un id y este es enviado a la funcion para
    //crear el Checkout, una vez allí inicializa la terminal de MP
    function pagarCuenta() {
        if (idpago.length === 0) {
            //console.log("Entre al if")
            const cuenta = {
                idCliente: idCliente,       //agregado por Leo
                title: "Total de cuenta",
                unit_price: Number(totalCuenta),
                quantity: 1,
                token: token
            }
            axios.post(serverFinder(`mercadopago/preference`), cuenta)
                .then((response) => {
                    idpago = response.data
                    console.log(idpago + "Estoy dentro del .then")
                    createCheckout(idpago)
                }) //Manda llamar la ruta y le pasa un objeto para crear una preferencia
        }
    }

    function createCheckout(idpago) { // Inicializa el carrito de compras
        // console.log("soy el id", idpago)
        mercadopago.checkout({
            preference: {
                id: idpago,
            },
            render: {
                container: '.button-checkout', // Aqui se muestra el botón
                label: 'Pagar', // Este es el texto que se le da al boton de Mercado Libre
            }
        });
    }

    return (
        <div className="container">
            <script src="https://sdk.mercadopago.com/js/v2" type="text/javascript"></script>

            <div className={global.textsubtitle}>
                <center>
                    <h5>TU CUENTA</h5>
                </center>
            </div>
            <div className={global.whitecardpedido}>
                <div className='ticket'>
                    <div className='ticket_header'>
                        <h6>Cant.</h6>
                        <h6>Producto</h6>
                        <h6>Unit.</h6>
                        <h6>Subtotal</h6>
                    </div>
                    <div className='ticket_body'>
                        {
                            cuenta?.map(producto => {
                                return <div key={producto.id} className='ticket_items'>
                                    <h6 id='item_cantidad' >{producto.cantidad}</h6>
                                    <h6 >{producto.name}</h6>
                                    <h6 id='item_precio' >{producto.precio.toLocaleString()},00</h6>
                                    <h6 >{(producto.precio * producto.cantidad).toLocaleString()},00</h6>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <h6 id='total_ticket'>TOTAL: ${totalCuenta.toLocaleString()},00</h6>
                    </div>
                </div>
            </div>
            <br />
            {/* <div className={global.underlinecard}>
            <h6>TOTAL: ${totalCuenta.toLocaleString()},00</h6>  
          </div> */}
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                
                <button className="btn btn-primary me-md-2" onClick={(e) => { pagarCuenta() }}>Pagar con Mercado Pago</button>
                <div class="button-checkout"></div>
            </div>
        </div>
    )
}