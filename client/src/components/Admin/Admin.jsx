//traernos la info de todos los resto/Usuario
//nos traemos ruta delete Usuario
//ver como suspendemos pag Resto

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allResto } from "../../store/actions";

import AutorizaResto from "./AutorizaResto";

import logo from "../../assets/Logo.png"
import CardsAdmin from "./CardsAdmin.jsx"
import styles from './Admin.module.css'
import Paginado from "./Paginado.jsx";



export default function SuperAdmin() {
    const restos = useSelector((state) => state.allResto)
    const dispatch = useDispatch() 

    let [currentPage, setCurrentPage] = useState(1)
    let [restoPerPage]= useState(3) 
    let indexOfLastResto = currentPage * restoPerPage 
    let indexOfFirstResto = indexOfLastResto - restoPerPage 
    let currentResto = restos.slice(indexOfFirstResto, indexOfLastResto)

    let paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        dispatch(allResto())
      },[])


    
      return (
        <div>
          <div className={styles.losImg}>
          <img src={logo} alt="Logo" width="20%"  className="navbar-brand" />
          <div className={styles.losTitulosAlMedio}>
          <h1>Admin</h1>
          </div>
          </div>
          <AutorizaResto/>

          <br />
          <div className={styles.losTitulosAlMedio}>
          <h3>Usuarios</h3>
          </div>
          <div className={styles.conteinerCards}>
            {
              currentResto?.map(el =>{
                return (
                  <h5><CardsAdmin key={el.id} id={el.id} name={el.name} mail={el.mail} usuario={el.usuario}/></h5>                  
                  )
                })
              }
          </div>
          <Paginado
           restoPerPage = {restoPerPage}
           restos = {restos.length}
           paginado = {paginado}
           />

        </div>
    )
}