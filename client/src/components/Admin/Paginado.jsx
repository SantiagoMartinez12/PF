import React from "react";
import styles from './Paginado.module.css'

export default function Paginado({restoPerPage, restos, paginado}) {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(restos/ restoPerPage); i++){ 
        pageNumber.push(i)
        
    }
    return(
        <div className={styles.paginacion}>
            <nav aria-label="...">
                <ul class="pagination"> 
                    { pageNumber && 
                    pageNumber.map(number => (
                        <li class="page-item" href = 'number' key={number}>
                        <a class="page-link" onClick = {() => paginado(number)}> {number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

