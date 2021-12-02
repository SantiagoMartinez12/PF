//se supone que aca el restaurant puede ver, agregar y modificar los medios de pago
import React from "react";



export default function MediosDePago(){

    return(
        <div className="container">
            <div className="titulo">
                 <h2>Medios de Pago</h2>
            </div>
            <div className="navBar">
               <button>Agregar</button>
               <button>Modificar</button>
               <button>Eliminar</button>
               
            </div>
            <div className="mostrarContenido">

                <div><h3>Titulo de lo que se está renderizando</h3></div>
                <div>
                    <p>Acá iría lo que carajo sea</p>
                </div>

            </div>
        </div>
    )

}