import { useState } from "react";
import { infoUsuario } from "../../../store/actions";
import style from "./setting.module.css"
import {Link} from 'react-router-dom'
import Usuario from "./usuario";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "./categoria";
import 'boxicons'

export default function Setting(){
    const[setting, setSettings] = useState(false)
    const dispatch = useDispatch()
    const info = useSelector((state) => state.usuario)

    function handleUsuario(e){
        e.preventDefault();
        dispatch(infoUsuario())
        setSettings(false)
    }
    function handleCategoria(e){
        e.preventDefault();
        setSettings()
    }

    return(
<div className={style.gridContainer}>
    <div className={style.form}>Mozo Vitual</div>
        <div className={style.nav}>
        <div className={style.infoUsuario}>
            <button onClick={(e)=>{handleUsuario(e)}}>
            <box-icon type='solid' name='user-detail'></box-icon>
                Informacion de Usuario</button>
            {info?.map((i) => {
                return <Usuario key={i.id} image={i.imagen} name={i.name} usuario={i.usuario} contraseña={i.contraseña} mail={i.mail} mesas={i.mesa}/>
            })}
        </div>
        <div className={style.productos}>
            <Link to='/producto'><button>
            <box-icon name='restaurant'></box-icon> 
                Productos</button></Link>
        </div>
        <div className={style.categorias}>
            <Link to='/categorias'><button onClick = {(e) => {handleCategoria(e)}}>
            <box-icon name='cart'></box-icon>
                Categorias</button></Link>
            <Categorias/>
        </div>
        <div className={style.mediosDePago}>
            <Link to='/mediosDePago'><button>
            <box-icon name='credit-card' type='solid' ></box-icon>
                Medios de pagos</button></Link>
        </div>
  </div>
</div>
    )
}