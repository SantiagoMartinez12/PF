//se supone que aca el restaurant puede ver, agregar y modificar los medios de pago
import React from "react";
import styles from "./MediosDePago.module.css";



export default function MediosDePago(){

    return(
        <div className={styles.gridContainer}>
                    <div className={styles.header}>
                        <h2>Medios de Pago</h2>
                    </div>
            <div className={styles.buttons}>
                <div className={styles.nav}>
                    <div>
                        <button>Agregar</button>
                    </div>
                    <div>
                        <button>Modificar</button>
                    </div>
                    <div>
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
            <div className={styles.renderArea}>
                
                <div className={styles.mostrarContenido}>
                    <div><h3>Acá se verían los medios de pago</h3>
                            <p>en forma de Cards supongo</p>
                    </div>
                        
                </div>
            </div>
        </div>
    )

}