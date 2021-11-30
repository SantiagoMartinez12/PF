import { useState } from "react";
import style from "./setting.module.css"
import {Link} from 'react-router-dom'
import Usuario from "./usuario";
import Categorias from "./Categorias";
import 'boxicons'
import { useDispatch, useSelector } from "react-redux";
import { infoUsuario } from "../../../store/actions";

export default function Setting(){
    const[iUsuario, setIUsuario] = useState(false)
    const[infoCategorias, setInfoCategorias] = useState(false)
    const info = useSelector((state) => state.usuario) 
    const dispatch = useDispatch()
    console.log(info)
    
    function handleUsuario(e){
        if(iUsuario === false){
            e.preventDefault();
            setIUsuario(true)
            dispatch(infoUsuario())
        }else{
            e.preventDefault();
            setIUsuario(false)
        }

    }
        function handleCategorias(e){
            if(infoCategorias === false){
                e.preventDefault();
                setInfoCategorias(true)
            }else{
                e.preventDefault();
                setInfoCategorias(false)
            }
        }


    return(
<div className={style.gridContainer}>
    <div className={style.titulo1}><h1>Mozo Virtual</h1></div>
        <div className={style.selectorBotones}>
            <div>
        <div className={style.infoUsuario}>
            <button onClick={(e)=>{handleUsuario(e)}}>
            <box-icon type='solid' name='user-detail'></box-icon>
                Informacion de Usuario</button>
                {/* {infoUsuario===true?<Usuario/>
                    : <></>
                } */}
            {iUsuario===true?info.map((el) => {
                return <Usuario key={el.id} image={el.imagen} name={el.name} usuario={el.usuario} contraseña={el.contraseña} mail={el.mail} mesa={el.mesa}/>
            }): <></>}
            </div>

        <div className={style.infoCategorias}>

            <Link to='/categorias'><button button onClick = {(e) => {handleCategorias(e)}}>

            <box-icon name='cart'></box-icon>
                Categorias</button></Link>
                {infoCategorias === true? <Categorias/> : <></>
                }
            
        </div>
        <div className={style.infoProductos}>
            <Link to='/producto'><button>
            <box-icon name='restaurant'></box-icon> 
                Productos</button></Link>
        </div>
        <div className={style.formasPago}>
            <Link to='/mediosDePago'><button>
            <box-icon name='credit-card' type='solid' ></box-icon>
                Medios de pagos</button></Link>
        </div>
        </div>
  </div>
</div>
    )
}