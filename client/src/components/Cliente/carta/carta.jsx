// traer el estado menu
// select con las categorías de producto
// estado ProductosMostrados se carga con los productos filtrados en base al select anterior
// mapear y renderizar el array de ProductosMostrados
//////// Para agregar ///// mostrar un detalle del producto /////////
// cada producto debe tener: Nombre --- precio --- input cantidad      - 0 +
// Estado local para ir guardando el pedido antes del submit
// boton "Finalizar pedido"  
// en la store debe haber un estado con el detalle del pedido que se actualiza con el submiteo anterior
import './carta.css';
import  { useEffect,} from 'react';

import Buscador from './Buscador'
import { useDispatch, useSelector } from 'react-redux'
import { filtroProductos, getProductos } from '../../../store/actions';
import ItemCarta from './itemCarta';
import { useParams } from 'react-router';
var global = require('../../Resto/global.module.css')

export default function Carta({verPedido}){
    const {idResto} = useParams()

    const categorias = useSelector(state => state.categoriasMenu);
    
    const filtrados = useSelector(state=> state.productosFiltrados)
    
    const cuenta = useSelector(state=> state.cuenta)
    
    const dispatch = useDispatch();
   
    useEffect (() =>{
        dispatch(getProductos(idResto))
    }, [dispatch]);
    
    const handleOnClick=(e)=>{
        dispatch(filtroProductos(e.target.value))

    }

    return(
        <div>
            <div className='tu_pedido'>
                <div className='tu_pedido_total'>
                    <h6>Tu pedido: ${cuenta.toLocaleString()},00</h6>
                </div>
                <button className='btn btn-primary' onClick={verPedido}>Ver Pedido</button>
                
            </div>

            <div className="container">
                <Buscador/>
                <br/>
                {/* <div className={global.underlinecard}>
                <h5>TOTAL: ${cuenta}</h5>
                </div> */}

                    
                <div className="d-grid gap-2 d-md-flex justify-content-sm-end text-capitalize">
                    {categorias?.map(c=>{
                        return(
                        <button key={c} value={c} onClick= {handleOnClick} className="btn btn-outline-primary">{c}</button>
                        )})}
                </div>
                <br/>
                
            
                <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
                    {filtrados.length > 0 ?

                        filtrados?.map(p=>{
                        return(
                            <div key={p.id} className="col align-items-center">
                                <ItemCarta data={p}/> 
                            </div>
                        )
                        })
                    :
                    <p>
                        Lo sentimos! Por el momento no contamos con estos productos. Selecciona otra categoria para continuar... 
                    </p>
                    }
                </div>
            </div>
        </div>    
    )
}


