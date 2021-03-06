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
      console.log(modificar)
      
  return ( 
    
        <div class="container-fluid">
          <div class={style.formulario}>
          <div class="row"><h4 className={style.titulo}>Informaci??n de Usuario</h4></div>
          <div class="col">
          <img src={restoInfo[0]?.image} alt="Imagen no encontrada" width="200px" height="250px" />
          </div>
          <div class="col">
          {editarImagen === false ? <> <button onClick={(e) => handleEditarImagen(e)} className="btn btn-primary">Editar</button></>
              :
              <div>
                <input onChange={(e) => { handleImg(e) }} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" className="form-control"></input>
                <img src={control} height="200" alt="Preview..." />
                <button onClick={(e) => handleEditarImagen(e)} className="btn btn-primary">x</button>
              </div>}
          </div>
          <div class="col">
          <div className={style.nombre}>Nombre de Resto: {restoInfo[0]?.name}</div>
          </div>
          <div class="col">
          {editarNombreResto===false?<>
                  <button onClick={(e)=>handleEditarNombreResto(e)} className="btn btn-primary">Editar</button></> : <>
                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}} name='name' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarNombreResto(e)} class="btn btn-outline-secondary" type="button" id="button-addon2">x</button> 
                  </div>
                  </>}
          </div>
          <div class="col">
          <div className={style.nombreUsuario}>Nombre de Usuario: {restoInfo[0]?.usuario}</div>
          </div>
          <div class="col">
          {editarNombreUsuario===false?<>
                  <button onClick={(e)=>handleEditarNombreUsuario(e)} className="btn btn-primary">Editar</button></> : <>
                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}} name='usuario' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarNombreUsuario(e)}  class="btn btn-outline-secondary" type="button" id="button-addon2">x</button>
                  </div>
                  </>}
          </div>
          <div class="col">
          <div className={style.mail}>Email: {restoInfo[0]?.mail} </div>
          </div>
          <div class="col">
          {editarEmail===false?<>
                  <button onClick={(e)=>handleEditarEmail(e)} className="btn btn-primary">Editar</button></> : <>
                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}}  name='mail' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarEmail(e)} class="btn btn-outline-secondary" type="button" id="button-addon2">x</button>
                  </div>
                  </>}
          </div>
          <div class="col">
          <div className={style.contrase??a}>Mesas: {restoInfo[0]?.mesa} </div>
          </div>
          <div class="col">
          {editarNumeroMesas===false?<>
                  <button onClick={(e)=>handleEditarNumeroMesas(e)} className="btn btn-primary">Editar</button></> : <>
                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}} name='mesa' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarNumeroMesas(e)} class="btn btn-outline-secondary" type="button" id="button-addon2">x</button>
                  </div>
                  </>}
          </div>
          <div class="col">
          <h3 className={style.tituloMercado}>Configuraci??n de Mercado Pago</h3>
          </div>
          <div class="col">
          Access Token: {restoInfo[0]?.accesstoken}
          </div>
          <div class="col">
          {console.log(restoInfo[0]?.accesstoken)}
                  {editarAccessToken===false?<>
                  <button onClick={(e)=>handleEditarAccessToken(e)} className="btn btn-primary">Editar</button></> : <>

                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}} name='token' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarAccessToken(e)}  class="btn btn-outline-secondary" type="button" id="button-addon2">x</button>
                  </div>
                  </>}
            </div>
            <div class="col">
            Public Key: {restoInfo[0]?.publickey} 
            </div>
            <div class="col">
            {editarPublicKey===false?<>
                  <button onClick={(e)=>handleEditarPublicKey(e)} className="btn btn-primary">Editar</button></> : <>
                  <div class="input-group mb-3">
                  <input onChange={(e)=> {handleModificar(e)}} name='key' type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"></input>
                  <button onClick={(e)=>handleEditarPublicKey(e)}  class="btn btn-outline-secondary" type="button" id="button-addon2">x</button>
                  </div>
                  </>}
            </div>
            <div class="col">
            <button onClick={(e)=>handleSubmit(e)} className={global.botonnavbar}>Enviar cambios</button>
            </div>
            </div>
        </div> 
      )

}



