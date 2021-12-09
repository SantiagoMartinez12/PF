import  { useEffect,} from 'react';

import Buscador from '../carta/Buscador'
import { useDispatch, useSelector } from 'react-redux'
import { filtroProductos, getProductos } from '../../../store/actions';
import ItemCarta from '../carta/itemCarta';
import { useParams } from 'react-router';
import axios from 'axios';
import serverFinder from '../../../store/deploy/serverFinder';
import { useState } from 'react';
import logo from "../../../assets/Logo.png";
var global = require('../../Resto/global.module.css')


export default function MesaOcupada(){
    const { idResto, idMesa, name } = useParams()
    const categorias = useSelector(state => state.categoriasMenu);
    const filtrados = useSelector(state=> state.productosFiltrados)
    const dispatch = useDispatch();
    const [ cliente, setCliente ] = useState('');
   
    const getNombre=(param)=>{
        axios.get(serverFinder(`cliente/${idResto}/autorizado`))
        .then(res=>{
           let encontrado = res.data.find(e => e.mesaId === param)
           setCliente(encontrado.nombre)
        })
    }

    useEffect (() =>{
        dispatch(getProductos(idResto))
        getNombre(idMesa)
    }, [dispatch]);
    
    const handleOnClick=(e)=>{
        dispatch(filtroProductos(e.target.value))

    const getNombre=(param)=>{
        axios.get(serverFinder(`cliente/${idResto}/autorizado`))
        .then(res=>{
           let encontrado = res.data.find(e => e.mesaId === param)
           setCliente(encontrado.nombre)
        })
    }

    }

    return(
        <div className="container">
            <div className="col">
                <center>
                    <img src={logo} alt="Logo" width="50%"  className="navbar-brand" />
                </center>
            </div>
            <div className="col">
                <center>
                    <h3>Bienvenid@ {name}!</h3>
                    <h4>Estás en la mesa de {cliente}</h4>
                    <h6>Sólo {cliente} puede realizar pedidos</h6>
                    <h6>pero tu puedes ir viendo nuestro menu.</h6>
                </center>
            </div>
            <Buscador/>
            <br/>
                            
         <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
                {categorias?.map(c=>{
                    return(
                    <button key={c} value={c} onClick= {handleOnClick} className="btn btn-outline-primary">{c}</button>
                    )})}
                </div>
            <br/>
            
         
             <div className="d-grid gap-2 d-md-flex justify-content-sm-end">
                {filtrados?.map(p=>{
                    return(
                        <div key={p.id} className="col align-items-center">
                            <ItemCarta data={p} mesaOcupada={true} /> 
                        </div>
                    )
                })}
                </div>
            
        </div>
    )
}

