import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import modificarUsuario,  {infoUsuario } from "../../../store/actions"
import style from "./usuario.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router";


export default function Usuario(){
  const {restoId} = useParams()
  const dispatch = useDispatch()
  const restoInfo = useSelector((state) => state.usuario)  
  const [editarImagen, setEditarImagen] = useState(false)
  const [editarNombreResto, setEditarNombreResto] = useState(false)
  const [editarNombreUsuario, setEditarNombreUsuario] = useState(false)
  const [editarEmail, setEditarEmail] = useState(false)  
  const [editarNumeroMesas, setEditarNumeroMesas] = useState(false)
  const [modificar, setModificar] = useState({
    id: restoId,
  })

  useEffect(()=>{
    dispatch(infoUsuario(restoId))
  },[])
  

  function handleModificar(e) {
    e.preventDefault();
    setModificar({
      ...modificar,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(modificarUsuario(modificar))
    setEditarImagen(false)
    setEditarNombreResto(false)
    setEditarNombreUsuario(false)
    setEditarEmail(false)
    setEditarNumeroMesas(false)
    dispatch(infoUsuario(restoId))
    // alert('El usuario se ha modificado exitosamente')
  }
  

  function handleEditarImagen(e){
    console.log(e.target.value)
      if(editarImagen===false){          
          setEditarImagen(true)         
      }else{
      e.preventDefault();
        setEditarImagen(false)        
        
    } 
  }

  function handleEditarNombreResto(e){
        if(editarNombreResto === false){          
          setEditarNombreResto(true)
        }else{
          e.preventDefault();
            setEditarNombreResto(false)
        } 
      }
      
      function handleEditarNombreUsuario(e){
        if(editarNombreUsuario===false){
          setEditarNombreUsuario(true)
        }else{
            setEditarNombreUsuario(false)
        } 
      }
    
      function handleEditarEmail(e){
        if(editarEmail===false){         
          setEditarEmail(true)
        }else{         
            setEditarEmail(false)
        } 
      }
        
      function handleEditarNumeroMesas(e){
        if(editarNumeroMesas===false){
          setEditarNumeroMesas(true)
        }else{
            setEditarNumeroMesas(false)
        } 
      }

      console.log(restoInfo)
      
      console.log(modificar)


  return ( 
  
        <div className={style.display}>
          <div className={style.formulario}>
            <h1 className={style.titulo}>Informacion de Usuario</h1>
              <div className={style.infoDeUsuario}></div>
        <div className={style.info}>
          
          <img  alt="img not found" width="200px" height="250px"/>
          {editarImagen === false ? <> <button onClick={(e)=>handleEditarImagen(e)} class="btn btn-primary">Editar</button></> 
          : <><input onChange={(e)=> {handleModificar(e)}} name='image' class="form-control"></input>
          <button onClick={(e)=>handleEditarImagen(e)} class="btn btn-primary">x</button></>}
          
          <div className={style.nombre}>Nombre de Resto: {restoInfo[0]?.name}</div>
          {editarNombreResto===false?<>
          <button onClick={(e)=>handleEditarNombreResto(e)} class="btn btn-primary">Editar</button></> : <>
          <input onChange={(e)=> {handleModificar(e)}} name='name' class="form-control"></input>
          <button onClick={(e)=>handleEditarNombreResto(e)} class="btn btn-primary">x</button></>} 
          
          <div className={style.nombreUsuario}>Nombre de Usuario: {restoInfo[0]?.usuario}</div>
          {editarNombreUsuario===false?<>
          <button onClick={(e)=>handleEditarNombreUsuario(e)} class="btn btn-primary">Editar</button></> : <>
          <input onChange={(e)=> {handleModificar(e)}} name='usuario' class="form-control"></input>
          <button onClick={(e)=>handleEditarNombreUsuario(e)}  class="btn btn-primary">x</button></>}
          
          <div className={style.mail}>Email: {restoInfo[0]?.mail} </div>
          {editarEmail===false?<>
          <button onClick={(e)=>handleEditarEmail(e)} class="btn btn-primary">Editar</button></> : <>
          <input onChange={(e)=> {handleModificar(e)}}  name='mail' class="form-control"></input>
          <button onClick={(e)=>handleEditarEmail(e)} class="btn btn-primary">x</button></>}
          
          <div className={style.contraseña}>Mesas: {restoInfo[0]?.mesa} </div>
          {editarNumeroMesas===false?<>
          <button onClick={(e)=>handleEditarNumeroMesas(e)} class="btn btn-primary">Editar</button></> : <>
          <input onChange={(e)=> {handleModificar(e)}} name='mesa' class="form-control"></input>
          <button onClick={(e)=>handleEditarNumeroMesas(e)} class="btn btn-primary">x</button></>}
          <div>
          <button onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Enviar cambios</button>
        </div>
        </div>
      </div>
      </div> 
      
      )
}



