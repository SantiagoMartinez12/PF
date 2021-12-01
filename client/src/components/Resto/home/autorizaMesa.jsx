import { useEffect, useState } from 'react'
import axios from 'axios';


export default function AutorizaMesa(){

    const [mesas, setMesas] = useState([])

    
    // al cargar el componente se dispara la función para actualizar mesas cada cierto tiempo
    useEffect (() =>{
        // updateMesas()
        setInterval(updateMesas, 1000)
    }, []);

    // esta función actualiza el estado mesas con la info traída del back   
    const updateMesas = ()=>{
        axios.get('http://localhost:3001/api/cliente/solicitado')
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
        <div>
            <h2>Soy el componente "Autoriza Mesa"</h2>
            <br/>
            <br/>
            
            { mesas.length?
                mesas?.map(m=>{
                    return  <div key={m.id}>
                                {`${m.nombre} está esperando autorización en ${m.mesa.name}`}
                                <button onClick={handleOnClickAutorizar} name={m.mesaId} value={m.id}>Autorizar</button>
                            </div>
                })
                :
                <h3>No hay solicitudes</h3>
            }


        </div>
    )
}