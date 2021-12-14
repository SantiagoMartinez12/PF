import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtroAdminId, filtroAdminMail, filtroAdminName } from "../../store/actions";
import styles from "./SearchBarAdmin.module.css";



export default function SearchBar(){

    const dispatch = useDispatch();
    const [busqueda, setBusqueda] = useState("");
    
      

    function handleInputChange(e){              
            setBusqueda(e.target.value)                          
    }
   
    function handleSearch(e){
        e.preventDefault();    
        let regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let esId = /^auth0/;

        if(regExMail.test(busqueda) === true){
            dispatch(filtroAdminMail(busqueda))
            setBusqueda("")
        } else if(esId.test(busqueda) === true){
            dispatch(filtroAdminId(busqueda))
            setBusqueda("")
        } else if(regExMail.test(busqueda) === false && esId.test(busqueda) === false){
            dispatch(filtroAdminName(busqueda))
            setBusqueda("")
        } else {
            alert('El usuario no existe')
        }
        
    }  

    return(
        
        <div className={styles.search}>
            <form className="d-flex">
                <input className="form-control mx-2 my-3" type="search" placeholder="Buscar Id, Mail o Restó" aria-label="Search" onChange={handleInputChange} />
                <button className="btn btn-primary mx-2 my-3" type="submit" onClick={(e) => handleSearch(e)} disabled={!busqueda} >Search</button>
            </form>
        </div>
    )



}