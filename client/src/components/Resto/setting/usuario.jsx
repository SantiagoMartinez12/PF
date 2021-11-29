import axios from "axios";
import { useEffect, useState } from "react";
import style from "./usuario.module.css"
import { useParams } from "react-router"


export default function Usuario(){  
  let [usuario, setUsuario] = useState(null)
  let {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:3001/api/resto/5b58f33f-8cee-4934-aa4a-43a6535fa880")
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
      <button>Editar</button>
      <div className={style.nombre}>{usuario[0].name}</div>
      <button>Editar</button>
    </div>
    <div className={style.modicarDatos}>
      <div className={style.modificarUsuario}>{usuario[0].usuario}</div>
      <button>Editar</button>
      <div className={style.modificarCantidadDeMesas}>{usuario[0].mesa}</div>
      <button>Editar</button>
      <div className={style.modificarContraseña}>{usuario[0].contraseña} </div>
      <button>Editar</button>
      <div className={style.modificarContraseña}>{usuario[0].mail} </div>
      <button>Editar</button>
    </div>
  </div>
  </> :
  <div>No se ha encontrado el usuario</div>
}
  </div> )
}