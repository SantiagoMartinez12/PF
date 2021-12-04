// traer el estado menu
// select con las categorías de producto
// estado ProductosMostrados se carga con los productos filtrados en base al select anterior
// mapear y renderizar el array de ProductosMostrados
//////// Para agregar ///// mostrar un detalle del producto /////////
// cada producto debe tener: Nombre --- precio --- input cantidad      - 0 +
// Estado local para ir guardando el pedido antes del submit
// boton "Finalizar pedido"  
// en la store debe haber un estado con el detalle del pedido que se actualiza con el submiteo anterior

import  { useEffect,} from 'react';

import Buscador from './Buscador'
import { useDispatch, useSelector } from 'react-redux'
import { filtroProductos, getProductos } from '../../../store/actions';
import ItemCarta from './itemCarta';
import { useParams } from 'react-router';


export default function Carta(){
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
        <div className="container">

            <Buscador/>
            <br/>
            <div>
            <h5 class="justify-content-md-end">Total a pagar ${cuenta}</h5>
            </div>
                
                <div class="d-grid gap-2 d-md-flex justify-content-sm-end">
                {categorias?.map(c=>{
                    return(
                    <button key={c} value={c} onClick= {handleOnClick} class="btn btn-outline-primary">{c}</button>
                    )})}
                </div>
            <br/>

                {filtrados?.map(p=>{
                    return(
                        <div key={p.id} class="p-3 mb-2 bg-light text-black">
                            <ItemCarta data={p}/> 
                        </div>
                    )
                })}
        </div>
    )
}


