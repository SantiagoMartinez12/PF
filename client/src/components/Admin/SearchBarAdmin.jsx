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

        if(regExMail.test(busqueda) === true){
            dispatch(filtroAdminMail(busqueda))
            setBusqueda("")
        } else {
            dispatch(filtroAdminName(busqueda))
            setBusqueda("")
        }
        
    }  

    return(
        
        <div className={styles.search}>
            <form className="d-flex">
                <input className="form-control mx-2 my-3" type="search" placeholder="Buscar Mail o Restó" aria-label="Search" onChange={handleInputChange} />
                <button className="btn btn-primary mx-2 my-3" type="submit" onClick={(e) => handleSearch(e)} disabled={!busqueda} >Search</button>
            </form>
        </div>
    )



}