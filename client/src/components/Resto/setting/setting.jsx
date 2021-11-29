import { useState } from "react";
import { infoUsuario } from "../../../store/actions";
import style from "./setting.module.css"
import {Link} from 'react-router-dom'
import Usuario from "./usuario";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "./Categorias";


export default function Setting(){
    const[infoUsuario, setInfoUsuario] = useState(false)
    const[infoCategorias, setInfoCategorias] = useState(false)
    const info = useSelector((state) => state.usuario)

    console.log(info)
    function handleUsuario(e){
        if(infoUsuario === false){
            e.preventDefault();
            setInfoUsuario(true)
        }else{
            e.preventDefault();
            setInfoUsuario(false)
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
    <div className={style.titulo1}><h1>Mozo Vitual</h1></div>
        <div className={style.selectorBotones}>
            <div>
        <div className={style.infoUsuario}>
            <button onClick={(e)=>{handleUsuario(e)}}>
            <box-icon type='solid' name='user-detail'></box-icon>
                Informacion de Usuario</button>
                {/* {infoUsuario===true?<Usuario/>
                    : <></>
                } */}
            {infoUsuario===true?info.map((i) => {
                return <Usuario key={i.id} image={i.imagen} name={i.name} usuario={i.usuario} contraseña={i.contraseña} mail={i.mail} mesas={i.mesa}/>
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