import axios from "axios";
import { useEffect, useState } from "react";
import style from "./usuario.module.css"
import { useParams } from "react-router"


export default function Usuario(){  
  let [usuario, setUsuario] = useState(null)
  let {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:3001/api/resto/437a0762-b37b-4d5b-97d0-e0ebd6ec8cdf")
        .then((response) => {
            setUsuario(response.data)
        })
        return () => {
            setUsuario(null)
        }
    }, [id])

    return ( <div>
      {
        usuario ?
        <>
        <div className={style.usuario}>
          <div className={style.infoDeUsuario}></div>
    <div className={style.info}>
      <div className={style.imagen}>{usuario[0].image}</div>
      <div className={style.nombre}>{usuario[0].name}</div>
    </div>
    <div className={style.modicarDatos}>
      <div className={style.modificarUsuario}>{usuario[0].usuario}</div>
      <div className={style.modificarCantidadDeMesas}>{usuario[0].mesa}</div>
      <div className={style.modificarContraseña}>{usuario[0].contraseña} </div>
      <div className={style.modificarContraseña}>{usuario[0].mail} </div>
    </div>
  </div>
  </> :
  <div>No se ha encontrado el usuario</div>
}
  </div> )
}