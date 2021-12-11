import React from "react";
import axios from "axios";
import { useEffect } from "react";
import serverFinder from "../../store/deploy/serverFinder";
import { useState } from "react";

export default function AutorizaResto(){
    const [restos, setRestos] = useState([])
    console.log(restos)
     // al cargar el componente se dispara la función para actualizar restos cada cierto tiempo
     useEffect (() =>{
        
        setInterval(updateRestos, 3000)
    }, []);

    // esta función actualiza el estado del resto con la info traída del back   
    const updateRestos = ()=>{
        axios.get(serverFinder(`resto/param/solicitado`))
            .then(res =>{
                setRestos(res.data)
            })

    }

    // cambia el estado del resto a "autorizado"
    const autorizarResto = (resto)=>{
        axios.put(serverFinder('resto'), {id:resto, estado:'autorizado'})
    }

   
    
    const handleOnClickAutorizar = (e) =>{
        e.preventDefault();
        autorizarResto(e.target.value)
        
    }

    return(
        <div class="card bg-success p-2 text-dark bg-opacity-10 mb-4">
        <div class="card-body">
        
        <div className="container">
            <div className="row">
                <h5>Autorizar Resto</h5>
                { restos.length?
                restos?.map(r=>{
                    return( 
                        <div>
                            <div key={r.id}>
                              <div className="text-capitalize fs-5">
                                {`${r.mail} está esperando autorización`}
                              </div> 
                              <div>
                                <button type="button" className="btn btn-primary" onClick={handleOnClickAutorizar}  value={r.id}>Autorizar</button>
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
        </div>
</div>
    )
}