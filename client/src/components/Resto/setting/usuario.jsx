import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import modificarUsuario,  {infoUsuario } from "../../../store/actions"
import style from "./usuario.module.css"



export default function Usuario({id, name, usuario, contraseña, mail, mesa, image}){
  const dispatch = useDispatch()
  const allUsuario = useSelector((state) => state.usuario)
  const [renderiza1, setRenderiza1] = useState({name:true})
  const [renderiza2, setRenderiza2] = useState({name:true})
  const [renderiza3, setRenderiza3] = useState({name:true})
  const [renderiza4, setRenderiza4] = useState({name:true})
  const [renderiza5, setRenderiza5] = useState({name:true})
  const [renderiza6, setRenderiza6] = useState({name:true})
  const [modificar, setModificar] = useState({
    id:'5cffeb91-f981-4d08-b887-ba1408ec5ce4',
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
    setRenderiza1(false)
    setRenderiza2(false)
    setRenderiza3(false)
    setRenderiza4(false)
    setRenderiza5(false)
    setRenderiza6(false)
    dispatch(infoUsuario())
  }
  console.log()

  function handleRenderiza1(e){
        if(renderiza1===false){
          e.preventDefault();
          setRenderiza1(true)
          setModificar({
            [e.target.name]: e.target.value
          })
    }else{
      e.preventDefault();
        setRenderiza1(false)
        setModificar({
          [e.target.name]: e.target.value
        })
    } 
  }

  function handleRenderiza2(e){
        if(renderiza2===false){
          e.preventDefault();
          setRenderiza2(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setRenderiza2(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
      function handleRenderiza3(e){
        if(renderiza3===false){
          e.preventDefault();
          setRenderiza3(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setRenderiza3(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
    
      function handleRenderiza4(e){
        if(renderiza4===false){
          e.preventDefault();
          setRenderiza4(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setRenderiza4(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
    
      function handleRenderiza5(e){
        if(renderiza5===false){
          e.preventDefault();
          setRenderiza5(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setRenderiza5(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }
    
      function handleRenderiza6(e){
        if(renderiza6===false){
          e.preventDefault();
          setRenderiza6(true)
          setModificar({
            [e.target.name]: e.target.value
          })
        }else{
          e.preventDefault();
            setRenderiza6(false)
            setModificar({
              [e.target.name]: e.target.value
            })
        } 
      }

  return ( <div className={style.display}>
          <div className={style.formulario}>
            <h1 className={style.titulo}>Informacion de Usuario</h1>
              <div className={style.infoDeUsuario}></div>
        <div className={style.info}>
          {/* <div className={style.imagen}>{usuario[0].image}</div> */}
          <img src={image} alt="img not found" width="200px" height="250px"/>
          {renderiza1===false?<>
          <button onClick={(e)=>handleRenderiza1(e)} value='image'>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='image'></input>
          <button onClick={(e)=>handleRenderiza1(e)}>x</button></>}
          
          <div className={style.nombre}>Nombre de Resto: {name}</div>
          {renderiza2===false?<>
          <button onClick={(e)=>handleRenderiza2(e)} value='name'>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='name'></input>
          <button onClick={(e)=>handleRenderiza2(e)}>x</button></>} 
          
          <div className={style.nombreUsuario}>Nombre de Usuario: {usuario}</div>
          {renderiza3===false?<>
          <button onClick={(e)=>handleRenderiza3(e)}>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='usuario'></input>
          <button onClick={(e)=>handleRenderiza3(e)} >x</button></>}
          
          <div className={style.mail}>Email: {mail} </div>
          {renderiza4===false?<>
          <button onClick={(e)=>handleRenderiza4(e)}>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='mail'></input>
          <button onClick={(e)=>handleRenderiza4(e)}>x</button></>}
          
          <div className={style.contraseña}>Contraseña: {contraseña} </div>
          {renderiza5===false?<>
          <button onClick={(e)=>handleRenderiza5(e)}>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='contraseña'></input>
          <button onClick={(e)=>handleRenderiza5(e)} >x</button></>}
          
          <div className={style.contraseña}>Mesas: {mesa} </div>
          {renderiza6===false?<>
          <button onClick={(e)=>handleRenderiza6(e)}>Editar</button></> : <>
          <input onChange={(e)=>handleModificar(e)} name='mesa'></input>
          <button onClick={(e)=>handleRenderiza6(e)} >x</button></>}
          <div>
          <button onClick={(e)=>onSubmit(e)} >Enviar cambios</button>
        </div>
        </div>
      </div>
      </div> )
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