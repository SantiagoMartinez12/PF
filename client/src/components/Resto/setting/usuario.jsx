// import { useAuth0 } from "@auth0/auth0-react";
// import logowhite from "../../../assets/Logo_white.png";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import modificarUsuario, { infoUsuario } from "../../../store/actions"
import style from "./usuario.module.css"
import { useParams } from "react-router";
var global = require('../../Resto/global.module.css')


export default function Usuario() {
  const { restoId } = useParams()
  const dispatch = useDispatch()
  const restoInfo = useSelector((state) => state.usuario)
  const [editarImagen, setEditarImagen] = useState(false)
  const [editarNombreResto, setEditarNombreResto] = useState(false)
  const [editarNombreUsuario, setEditarNombreUsuario] = useState(false)
  const [editarEmail, setEditarEmail] = useState(false)
  const [editarNumeroMesas, setEditarNumeroMesas] = useState(false)
  const [editarAccessToken, setEditarAccessToken] = useState(false)
  const [editarPublicKey, setEditarPublicKey] = useState(false)
  const [modificar, setModificar] = useState({
    id: restoId,
  })
  const [imagenSelected, setImagenSelected] = useState(null)
  const [control, setControl] = useState(null)


  useEffect(() => {
    dispatch(infoUsuario(restoId))
    if (control) {
      setModificar({
        ...modificar,
        image: control
      });
    }
  }, [control])


  function handleModificar(e) {
    e.preventDefault();
    if (e.target.name !== 'imagen') {
      setModificar({
        ...modificar,
        [e.target.name]: e.target.value
      })
    }
  }


  function handleSubmit(e) {
    e.preventDefault()
    dispatch(modificarUsuario(modificar))
    setEditarImagen(false)
    setEditarNombreResto(false)
    setEditarNombreUsuario(false)
    setEditarEmail(false)
    setEditarNumeroMesas(false)
    setEditarAccessToken(false)
    setEditarPublicKey(false)
    dispatch(infoUsuario(restoId))
    if (window.confirm("El usuario se ha modificado exitosamente")) {
      window.location.reload()
    } else {
      window.location.reload()
    };
    // alert('El usuario se ha modificado exitosamente')
  }


  function handleEditarImagen(e) {
    //console.log(e.target.value)
    if (editarImagen === false) {
      setEditarImagen(true)
    } else {
      e.preventDefault();
      setEditarImagen(false)

    }
  }

  function handleEditarNombreResto(e) {
    if (editarNombreResto === false) {
      setEditarNombreResto(true)
    } else {
      e.preventDefault();
      setEditarNombreResto(false)
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
      
      function handleEditarAccessToken(e){
        if(editarAccessToken===false){
          setEditarAccessToken(true)
        }else{
            setEditarAccessToken(false)
        } 
      }

      function handleEditarPublicKey(e){
        if(editarPublicKey===false){
          setEditarPublicKey(true)
        }else{
            setEditarPublicKey(false)
        } 
      }
    const handleImg = (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = async function () {
      setControl(reader.result)
    }
    if (file) {
      setImagenSelected(reader.readAsDataURL(file));
    }

  }

      // console.log(restoInfo)      
      // console.log(modificar)
      
  return ( 
    
  
        <div className={style.display}>
            <div className={style.formulario}>
                <h1 className={style.titulo}>Información de Usuario</h1>
                
                <div className={style.info}>
              
                 <img src={restoInfo[0]?.image} alt="img not found" width="200px" height="250px" />
          <div>
            {editarImagen === false ? <> <button onClick={(e) => handleEditarImagen(e)} className="btn btn-primary">Editar</button></>
              :
              <div>
                <input onChange={(e) => { handleImg(e) }} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" className="form-control"></input>
                <img src={control} height="200" alt="Preview..." />
                <button onClick={(e) => handleEditarImagen(e)} className="btn btn-primary">x</button>
              </div>}
                  </div>
              
                  <div className={style.nombre}>Nombre de Resto: {restoInfo[0]?.name}</div>
                  {editarNombreResto===false?<>
                  <button onClick={(e)=>handleEditarNombreResto(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}} name='name' className="form-control"></input>
                  <button onClick={(e)=>handleEditarNombreResto(e)} className="btn btn-primary">x</button></>} 
              
                  <div className={style.nombreUsuario}>Nombre de Usuario: {restoInfo[0]?.usuario}</div>
                  {editarNombreUsuario===false?<>
                  <button onClick={(e)=>handleEditarNombreUsuario(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}} name='usuario' className="form-control"></input>
                  <button onClick={(e)=>handleEditarNombreUsuario(e)}  className="btn btn-primary">x</button></>}
              
                  <div className={style.mail}>Email: {restoInfo[0]?.mail} </div>
                  {editarEmail===false?<>
                  <button onClick={(e)=>handleEditarEmail(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}}  name='mail' className="form-control"></input>
                  <button onClick={(e)=>handleEditarEmail(e)} className="btn btn-primary">x</button></>}
              
                  <div className={style.contraseña}>Mesas: {restoInfo[0]?.mesa} </div>
                  {editarNumeroMesas===false?<>
                  <button onClick={(e)=>handleEditarNumeroMesas(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}} name='mesa' className="form-control"></input>
                  <button onClick={(e)=>handleEditarNumeroMesas(e)} className="btn btn-primary">x</button></>}
                  <div>
                  <h5>Configurar Mercado Pago:</h5>
                  </div>
                  <div className={style.accessToken}>Access Token: {restoInfo[0]?.accesstoken} </div>
                  {console.log(restoInfo[0]?.accesstoken)}
                  {editarAccessToken===false?<>
                  <button onClick={(e)=>handleEditarAccessToken(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}} name='accesstoken' className="form-control"></input>
                  <button onClick={(e)=>handleEditarAccessToken(e)} className="btn btn-primary">x</button></>}

                  <div className={style.publicKey}>Public Key: {restoInfo[0]?.publickey} </div>
                  {editarPublicKey===false?<>
                  <button onClick={(e)=>handleEditarPublicKey(e)} className="btn btn-primary">Editar</button></> : <>
                  <input onChange={(e)=> {handleModificar(e)}} name='publickey' className="form-control"></input>
                  <button onClick={(e)=>handleEditarPublicKey(e)} className="btn btn-primary">x</button></>}

                    <div>
                    <button onClick={(e)=>handleSubmit(e)} className={global.botonnavbar}>Enviar cambios</button>
                    </div>
                </div>

            </div>

        </div>       
      )

}



