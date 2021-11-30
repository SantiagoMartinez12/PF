import { useState } from "react"
import { useDispatch } from "react-redux"
import modificarUsuario from "../../../store/actions"
import style from "./usuario.module.css"



export default function Usuario({name, usuario, contraseña, mail, mesa, image}){
  const dispatch = useDispatch()
  const [modificar, setModificar] = useState({
    image:'',
    name: '',
    usuario: '',
    contraseña: '',
    mail: '',
    mesa: 0
  })

  function handleModificar(e) {
    e.preventDefault();
    setModificar({
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(modificarUsuario())
    alert('El usuario se ha modificado exitosamente')
    setModificar({
      image:'',
      name: '',
      usuario: '',
      contraseña: '',
      mail: '',
      mesa: 0,
    })
    console.log(name)
  }

    return ( <div className={style.display}>
      <div className={style.formulario}>
        <h1 className={style.titulo}>Informacion de Usuario</h1>
          <div className={style.infoDeUsuario}></div>
    <div className={style.info}>
      {/* <div className={style.imagen}>{usuario[0].image}</div> */}
      <img src={image} alt="img not found" width="200px" height="250px"/>
      
      <div className={style.nombre}>Nombre de Resto: {name}</div>
      <input onChange={handleModificar}></input>
    
      
      <div className={style.nombreUsuario}>Nombre de Usuario: {usuario}</div>
      <input onChange={handleModificar}></input>
      
      <div className={style.mail}>Email: {mail} </div>
      <input onChange={handleModificar}></input>
      
      <div className={style.contraseña}>Contraseña: {contraseña} </div>
      <input onChange={handleModificar}></input>
      <h5>Agregar/Quitar Mesas</h5>
      <button >-</button>
      <div>{mesa}</div>
      <button>+</button>
      <div>
      <button onClick={onSubmit}>Modificar Usuario</button>

    </div>
    </div>
  </div>
  
  <div>No se ha encontrado el usuario</div>

  </div> )
}