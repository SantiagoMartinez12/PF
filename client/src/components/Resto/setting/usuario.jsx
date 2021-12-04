import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import modificarUsuario,  {infoUsuario } from "../../../store/actions"
import style from "./usuario.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router";


export default function Usuario({id, name, usuario, contraseña, mail, mesa, image}){
  const {restoId} = useParams()
  const dispatch = useDispatch()
  const restoId1 = useSelector((state) => state.usuario)
  const [editarImagen, setEditarImagen] = useState(false)
  const [editarNombreResto, setEditarNombreResto] = useState(false)
  const [editarNombreUsuario, setEditarNombreUsuario] = useState(false)
  const [editarEmail, setEditarEmail] = useState(false)  
  const [editarNumeroMesas, setEditarNumeroMesas] = useState(false)
  const [modificar, setModificar] = useState({
    id: restoId,
    name: name,
    usuario: usuario,
    mail: mail,
    mesa: mesa,
    image: image
  })



  
  

  function handleModificar(e) {
    e.preventDefault();
    setModificar({
      ...modificar,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(modificarUsuario(modificar))
    alert('El usuario se ha modificado exitosamente')
    setEditarImagen(false)
    setEditarNombreResto(false)
    setEditarNombreUsuario(false)
    setEditarEmail(false)
    setEditarNumeroMesas(false)
    dispatch(infoUsuario())
  }
  

  function handleEditarImagen(e){
      if(editarImagen===false){          
          setEditarImagen(true)
          setModificar({
            [e.target.name]: e.target.value
          })
      }else{
      e.preventDefault();
        setEditarImagen(false)        
        
    } 
  }

  function handleEditarNombreResto(e){
        if(editarNombreResto === false){
          
          setEditarNombreResto(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setEditarNombreResto(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
      
      function handleEditarNombreUsuario(e){
        if(editarNombreUsuario===false){
          e.preventDefault();
          setEditarNombreUsuario(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setEditarNombreUsuario(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
    
      function handleEditarEmail(e){
        if(editarEmail===false){
          
          setEditarEmail(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          
            setEditarEmail(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
    
  
    
      function handleEditarNumeroMesas(e){
        if(editarNumeroMesas===false){
          e.preventDefault();
          setEditarNumeroMesas(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setEditarNumeroMesas(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }

  return ( 
  
        <div className={style.display}>
          <div className={style.formulario}>
            <h1 className={style.titulo}>Informacion de Usuario</h1>
              <div className={style.infoDeUsuario}></div>
        <div className={style.info}>
          
          <img src={image} alt="img not found" width="200px" height="250px"/>
          {editarImagen === false ? <> <button onClick={(e)=>handleEditarImagen(e)} >Editar</button></> 
          : <><input  name='image'></input>
          <button onClick={(e)=>handleEditarImagen(e)} >x</button></>}
          
          <div className={style.nombre}>Nombre de Resto: {name}</div>
          {editarNombreResto===false?<>
          <button onClick={(e)=>handleEditarNombreResto(e)} value='name'>Editar</button></> : <>
          <input  name='name'></input>
          <button onClick={(e)=>handleEditarNombreResto(e)}>x</button></>} 
          
          <div className={style.nombreUsuario}>Nombre de Usuario: {usuario}</div>
          {editarNombreUsuario===false?<>
          <button onClick={(e)=>handleEditarNombreUsuario(e)} >Editar</button></> : <>
          <input  name='usuario'></input>
          <button onClick={(e)=>handleEditarNombreUsuario(e)}  >x</button></>}
          
          <div className={style.mail}>Email: {mail} </div>
          {editarEmail===false?<>
          <button onClick={(e)=>handleEditarEmail(e)} >Editar</button></> : <>
          <input  name='mail'></input>
          <button onClick={(e)=>handleEditarEmail(e)}>x</button></>}
          
          <div className={style.contraseña}>Mesas: {mesa} </div>
          {editarNumeroMesas===false?<>
          <button onClick={(e)=>handleEditarNumeroMesas(e)}>Editar</button></> : <>
          <input onChange={(e)=> {handleModificar(e)}} name='mesa'></input>
          <button onClick={(e)=>handleEditarNumeroMesas(e)} >x</button></>}
          <div>
          <button  >Enviar cambios</button>
        </div>
        </div>
      </div>
      </div> 
      
      )
}



