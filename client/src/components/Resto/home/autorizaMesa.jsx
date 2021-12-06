import { useEffect, useState } from 'react'
import axios from 'axios';

var global = require('../../Resto/global.module.css')


export default function AutorizaMesa({restoId}){

    const [mesas, setMesas] = useState([])

    
    // al cargar el componente se dispara la función para actualizar mesas cada cierto tiempo
    useEffect (() =>{
        // updateMesas()
        setInterval(updateMesas, 1000)
    }, []);

    // esta función actualiza el estado mesas con la info traída del back   
    const updateMesas = ()=>{
        axios.get(`http://localhost:3001/api/cliente/${restoId}/solicitado`)
            .then(res =>{
                setMesas(res.data)
            })

    }

    // cambia el estado del cliente a "autorizado"
    const autorizarCliente = (cliente)=>{
        axios.put('http://localhost:3001/api/cliente', {id:cliente, estado:'autorizado'})
    }

    // cambia el estado de la mesa a true (ocupada)
    const ocuparMesa = (mesa)=>{
        axios.put('http://localhost:3001/api/mesa', {id:mesa, estado:true})
    }
    
    const handleOnClickAutorizar = (e) =>{
        e.preventDefault();
        autorizarCliente(e.target.value)
        ocuparMesa(e.target.name)
    }
   
    
    return (
        <div class="container">
            <div class="row">
                <h2>Autorizar Mesa</h2>
                { mesas.length?
                mesas?.map(m=>{
                    return( 
                        <div>
                            <div key={m.id}>
                              <div class="text-capitalize fs-5">
                                {`${m.nombre} está esperando autorización en ${m.mesa?m.mesa.name:'mesa incorrecta!'}`}
                              </div> 
                              <div>
                                <button type="button" class="btn btn-primary" onClick={handleOnClickAutorizar} name={m.mesaId} value={m.id}>Autorizar</button>
                              </div>  
                            </div>
                        </div>
                 ) })
                :
                <div>
                <div>
                <p>No hay solicitudes</p>
                </div>
                </div>
            }
            </div>
        </div>
    )
}