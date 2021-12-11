import { useDispatch, useSelector } from "react-redux"
import { setPedidoModificado } from "../../../store/actions";
import axios from 'axios';
import serverFinder from "../../../store/deploy/serverFinder";
import { useParams } from "react-router";
import './aviso.css'

export default function Aviso(){
    const { idCliente } = useParams();
    const prodModificado = useSelector(state=> state.pedidoModificado);
    const dispatch = useDispatch();
    
    const handleOnClick = (e) =>{
        e.preventDefault();
        //resetea la propiedad pedidoModificado del cliente
        axios.put(serverFinder('cliente'), { id: idCliente, pedidoModificado: '' })
        dispatch(setPedidoModificado(''));
    }

    return(
        <div className="body_aviso">
            <div className="container_aviso">
                <center>
                    <h5>Por falta de disponibilidad </h5>
                    <h5>hemos eliminado de tu pedido </h5>
                    <h5>el producto {prodModificado}. </h5>
                    <br/>
                    <h6>Si lo deseas puedes elegir otro producto</h6> 
                    <h6>de nuestro menú y volver a pedir.</h6>
                    <h6>Disculpa las molestias ocasionadas</h6>
                    <button onClick={handleOnClick} id='boton_cerrar' className="btn btn-primary">Cerrar</button>
                </center>
            </div>    
        </div>
    )
}