import React from "react";
import styles from './Paginado.module.css'

export default function Paginado({restoPerPage, resto, paginado}) {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(resto/ restoPerPage); i++){ 
        pageNumber.push(i)
        
    }
    return(
        <>
        <section className={styles.paginacion}>
            <ul>
                { pageNumber && 
                pageNumber.map(number => (
                    <li href = 'number' key={number}>
                    <a onClick = {() => paginado(number)}> {number}</a>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}