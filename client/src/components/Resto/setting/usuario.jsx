import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import modificarUsuario,  {infoUsuario } from "../../../store/actions"
import style from "./usuario.module.css"



export default function Usuario({id, name, usuario, contraseña, mail, mesa, image}){
  const dispatch = useDispatch()
  const allUsuario = useSelector((state) => state.usuario)
  const [editarImagen, setEditarImagen] = useState(false)
  const [editarNombreResto, setEditarNombreResto] = useState(false)
  const [editarNombreUsuario, setEditarNombreUsuario] = useState(false)
  const [editarEmail, setEditarEmail] = useState(false)  
  const [editarNumeroMesas, setEditarNumeroMesas] = useState(false)
  const [modificar, setModificar] = useState({
    id: id,
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




// const dispatch = useDispatch()
//   const allUsuario = useSelector((state) => state.usuario)
//   const [renderiza1, setRenderiza1] = useState(false)
//   const [renderiza2, setRenderiza2] = useState(false)
//   const [renderiza3, setRenderiza3] = useState(false)
//   const [renderiza4, setRenderiza4] = useState(false)
//   const [renderiza5, setRenderiza5] = useState(false)
//   const [renderiza6, setRenderiza6] = useState(false)
//   const [modificar, setModificar] = useState({
//     id:'5cffeb91-f981-4d08-b887-ba1408ec5ce4',
//   })

//   function handleModificar(e) {
//     e.preventDefault();
//     setModificar({
//       ...modificar,
//       [e.target.name]: e.target.value
//     })
//   }

//   function onSubmit(e){
//     e.preventDefault()
//     dispatch(modificarUsuario(modificar))
//     alert('El usuario se ha modificado exitosamente')
//     setRenderiza1(false)
//     setRenderiza2(false)
//     setRenderiza3(false)
//     setRenderiza4(false)
//     setRenderiza5(false)
//     setRenderiza6(false)
//   }

//   function handleRenderiza1(e){
//     if(renderiza1===false){
//       e.preventDefault();
//       setRenderiza1(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza1(false)
//     } 
//   }

//   function handleRenderiza2(e){
//     if(renderiza2===false){
//       e.preventDefault();
//       setRenderiza2(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza2(false)
//     } 
//   }
//   function handleRenderiza3(e){
//     if(renderiza3===false){
//       e.preventDefault();
//       setRenderiza3(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza3(false)
//     } 
//   }

//   function handleRenderiza4(e){
//     if(renderiza4===false){
//       e.preventDefault();
//       setRenderiza4(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza4(false)
//     } 
//   }

//   function handleRenderiza5(e){
//     if(renderiza5===false){
//       e.preventDefault();
//       setRenderiza5(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza5(false)
//     } 
//   }

//   function handleRenderiza6(e){
//     if(renderiza6===false){
//       e.preventDefault();
//       setRenderiza6(true)
//       setModificar({
//         [e.target.name]: e.target.value
//       })
//     }else{
//       e.preventDefault();
//         setRenderiza6(false)
//     } 
//   }

//     return ( <div className={style.display}>
//       <div className={style.formulario}>
//         <h1 className={style.titulo}>Informacion de Usuario</h1>
//           <div className={style.infoDeUsuario}></div>
//     <div className={style.info}>
//       {/* <div className={style.imagen}>{usuario[0].image}</div> */}
//       <img src={image} alt="img not found" width="200px" height="250px"/>
//       {renderiza1===false?<>
//       <button onClick={(e)=>handleRenderiza1(e)} value='image'>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='image'></input>
//       <button onClick={(e)=>handleRenderiza1(e)}>x</button></>}
      
//       <div className={style.nombre}>Nombre de Resto: {name}</div>
//       {renderiza2===false?<>
//       <button onClick={(e)=>handleRenderiza2(e)} value='name'>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='name'></input>
//       <button onClick={(e)=>handleRenderiza2(e)}>x</button></>} 
      
//       <div className={style.nombreUsuario}>Nombre de Usuario: {usuario}</div>
//       {renderiza3===false?<>
//       <button onClick={(e)=>handleRenderiza3(e)}>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='usuario'></input>
//       <button onClick={(e)=>handleRenderiza3(e)} >x</button></>}
      
//       <div className={style.mail}>Email: {mail} </div>
//       {renderiza4===false?<>
//       <button onClick={(e)=>handleRenderiza4(e)}>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='mail'></input>
//       <button onClick={(e)=>handleRenderiza4(e)}>x</button></>}
      
//       <div className={style.contraseña}>Contraseña: {contraseña} </div>
//       {renderiza5===false?<>
//       <button onClick={(e)=>handleRenderiza5(e)}>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='contraseña'></input>
//       <button onClick={(e)=>handleRenderiza5(e)} >x</button></>}
      
//       <div className={style.contraseña}>Mesas: {mesa} </div>
//       {renderiza6===false?<>
//       <button onClick={(e)=>handleRenderiza6(e)}>Editar</button></> : <>
//       <input onChange={(e)=>handleModificar(e)} name='mesa'></input>
//       <button onClick={(e)=>handleRenderiza6(e)} >x</button></>}
//       <div>
//       <button onClick={(e)=>onSubmit(e)} >Enviar cambios</button>
//     </div>
//     </div>
//   </div>
//   </div> )
// }