import React from "react";
import styles from './Paginado.module.css'

export default function Paginado({restoPerPage, restos, paginado}) {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(restos/ restoPerPage); i++){ 
        pageNumber.push(i)
        
    }
    return(
        <>
        <nav className={styles.paginacion}>
            <ul>
                { pageNumber && 
                pageNumber.map(number => (
                    <li href = 'number' key={number}>
                    <a onClick = {() => paginado(number)}> {number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}