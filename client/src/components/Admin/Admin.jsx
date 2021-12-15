//traernos la info de todos los resto/Usuario
//nos traemos ruta delete Usuario
//ver como suspendemos pag Resto

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allResto } from "../../store/actions";
import {useAuth0} from '@auth0/auth0-react'
import AutorizaResto from "./AutorizaResto";

import logo from "../../assets/Logo.png"
import CardsAdmin from "./CardsAdmin.jsx"
import styles from './Admin.module.css'
import Paginado from "./Paginado.jsx";
import SearchBarAdmin from "./SearchBarAdmin";



export default function SuperAdmin() {
    const { logout } = useAuth0();
    const restos = useSelector((state) => state.allResto)
    const filtro = useSelector((state) => state.allRestoFiltrosAdmin)
    const dispatch = useDispatch() 
    const filtrado = filtro?.filter((el) => el.mail !== "admin@mozovirtual.com")

    let [currentPage, setCurrentPage] = useState(1)
    let [restoPerPage]= useState(3) 
    let indexOfLastResto = currentPage * restoPerPage 
    let indexOfFirstResto = indexOfLastResto - restoPerPage 
    let currentResto = filtrado.slice(indexOfFirstResto, indexOfLastResto)

 console.log(currentResto)
    let paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        setInterval(()=>{
          dispatch(allResto()) 
              
              
          }, 5000)
         
      },[])

    function handleClick(e){
      dispatch(allResto())
    }
    

      return (
        <div>
          <div >
            <img src={logo} alt="Logo" width="10%"  className="navbar-brand" />
            <div className={styles.logout}> 
              <button onClick={() => logout({returnTo: window.location.origin})} class="btn btn-outline-primary">Logout</button>
            </div>
            <div className={styles.losTitulosAlMedio}>
              <h3>SuperAdmin</h3>
            </div>
            <div className={styles.losTitulosAlMedio}>
              <SearchBarAdmin />
            </div>
            <div className={styles.losTitulosAlMedio}>
              <button className="btn btn-primary mx-2 my-3" onClick={handleClick} >Ver todos</button>
            </div>
            <AutorizaResto/>

            <br />
            <div className={styles.losTitulosAlMedio}>
              <h3>Usuarios</h3>
            </div>
            <div className={styles.conteinerCards}>
              {
                currentResto.length ? currentResto?.map(el =>{
                  return (
                    <div key={el.id}><CardsAdmin key={el.id} image={el.image} id={el.id} name={el.name} mail={el.mail} estado={el.estado}/>
                    </div>
                                   
                    )
                  }) : <div><h4>No existe el usuario</h4></div>
                
              }
            </div >
            <div className={styles.paginado }>
              <Paginado
              restoPerPage = {restoPerPage}
              restos = {restos.length}
              paginado = {paginado}
              />
            </div>

            </div>
        </div>
    )
}