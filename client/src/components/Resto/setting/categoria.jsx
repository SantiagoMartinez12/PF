import React, { useEffect, useState } from "react";
import axios from "axios";




export default function Categorias(){

    const [categorias, setCategorias] = useState()

    useEffect(() => {
      let data= axios.get("http://localhost:3001/api/categorias/437a0762-b37b-4d5b-97d0-e0ebd6ec8cdf")
       .then(resp => {setCategorias(resp.data)})   
          
    }, [])

    

   
    return(
        <div>    
           {
               categorias?<div><h1>{categorias.name}</h1></div> : "No hay categorias"

           }
        
        </div>
    )

}