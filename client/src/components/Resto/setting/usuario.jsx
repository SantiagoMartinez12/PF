import axios from "axios";
import { useEffect, useState } from "react";
import style from "./usuario.module.css"
import { useParams } from "react-router"
import { infoUsuario } from "../../../store/actions";
import { useDispatch } from "react-redux";


export default function Usuario(){  
  let [usuario, setUsuario] = useState(null)
  let {id} = useParams()
  let dispatch=useDispatch()

    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/resto/f602db27-b12e-40dd-83c5-bc0ee02cf82b")
    //     .then((response) => {
    //         setUsuario(response.data)
    //     })
    //     return () => {
    //         setUsuario(null)
    //     }
    // }, [id])

    useEffect(() => {
          dispatch(infoUsuario())
  }, [dispatch])

    return ( <div className={style.display}>
      {
        usuario ?
        <>
        <div className={style.formulario}>
        <h1 className={style.titulo}>Informacion de Usuario</h1>
          <div className={style.infoDeUsuario}></div>
    <div className={style.info}>
      {/* <div className={style.imagen}>{usuario[0].image}</div> */}
      <img src={usuario[0].image} alt="img not found" width="200px" height="250px"/>
      <button>Editar</button>
      <input></input>
      <div className={style.nombre}>{usuario[0].name}</div>
      <button>Editar</button>
    <div className={style.modicarDatos}>
      <div className={style.nombreUsuario}>{usuario[0].usuario}</div>
      <button>Editar</button>
      <div className={style.mail}>{usuario[0].mail} </div>
      <button>Editar</button>
      <div className={style.contraseña}>{usuario[0].contraseña} </div>
      <button>Editar</button>
      <div className={style.mesas}>{usuario[0].mesa}</div>
      <button>Editar</button>
    </div>
    </div>
  </div>
  </> :
  <div>No se ha encontrado el usuario</div>
}
  </div> )
}