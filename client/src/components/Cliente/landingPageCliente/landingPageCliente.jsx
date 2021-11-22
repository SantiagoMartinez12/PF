// debería traer por params el ID de la mesa
//  ese ID en la store para enviarlo en el post del pedido 
// 
// mensaje bienvenida
// input para el nombre del cliente ---> guardar  en store para enviarlo en el post del pedido
// boton submit "Ingresar"


import React from "react";
import {Link} from "react-router-dom"

export default function LandingPageClient() {
return (
    <div>
            <h1>Landing Page</h1>
    <Link to="/home">
        <button>Ingresar</button>
    </Link>

    </div>
)




}

