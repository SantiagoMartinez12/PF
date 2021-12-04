import { useState } from "react";
import style from "./setting.module.css"
import { Link } from 'react-router-dom'
import Usuario from "./usuario";
import Categorias from "./Categorias";
import 'boxicons'
import { useDispatch, useSelector } from "react-redux";
import { infoUsuario } from "../../../store/actions";
import Product from "../product/Product";
import MediosDePago from "./MediosDePago";
import { useParams } from "react-router";



export default function Setting() {
    const [iUsuario, setIUsuario] = useState(false)
    const [infoCategorias, setInfoCategorias] = useState(false)
    const [product, setProduct] = useState(false)
    const [mediosDePago, setMediosDePago] = useState(false)
    const info = useSelector((state) => state.usuario)
    const dispatch = useDispatch()
    const {restoId} = useParams()
    const ruta = `/home/resto/${restoId}`

    function handleUsuario(e) {
        if (iUsuario === false) {            
            setIUsuario(true)
            dispatch(infoUsuario(restoId))
            setInfoCategorias(false)
            setProduct(false)
            setMediosDePago(false)
        } else {
            
            setIUsuario(false)
        }

    }
    function handleCategorias(e) {
        if (infoCategorias === false) {
           
            setInfoCategorias(true)
            setIUsuario(false)
            setProduct(false)
            setMediosDePago(false)
        } else {
           
            setInfoCategorias(false)
        }
    }

    function handleProduct(e) {
        if (product === false) {
            
            setProduct(true)
            setIUsuario(false)
            setInfoCategorias(false)
            setMediosDePago(false)

        } else {
            
            setProduct(false)
        }
    }

    function handleMediosDePago(e){
        if(mediosDePago===false){
           
            setMediosDePago(true)
            setProduct(false)
                setIUsuario(false)
                setInfoCategorias(false)
        }else{
           
            setMediosDePago(false)
        }

    }

    return (
        <div className={style.gridContainer}>
            <div className={style.LogoTitulo}>
                <div className={style.titulo1}><h1>Mozo Virtual</h1></div>
            </div>
            <div className={style.navBar}>
                <div className={style.infoUsuario}>
                    <button onClick={(e) => { handleUsuario(e) }}>
                        <box-icon type='solid' name='user-detail'></box-icon>
                        Informacion de Usuario</button>
                </div>

                <div className={style.infoCategorias}>
                    <button onClick={(e) => { handleCategorias(e) }}>
                        <box-icon name='cart'></box-icon>
                        Categorias</button>
                </div>
                <div className={style.infoProductos}>
                    <button onClick={(e) => { handleProduct(e) }}>
                        <box-icon name='restaurant'></box-icon>
                        Productos</button>
                </div>
                <div className={style.formasPago}>
                    <Link to='/mediosDePago'>
                        <button onClick={(e) => { handleMediosDePago(e) }}>
                        <box-icon name='credit-card' type='solid' ></box-icon>
                        Medios de pagos</button></Link>
                </div>

            </div>


            <div className={style.display}>
                {iUsuario === true ? <Usuario />
                 : <></>}

                {infoCategorias === true ? <Categorias /> : <></>
                }

                {product === true ? <Product /> : <></>
                }

                {mediosDePago === true ? <MediosDePago /> : <></>
                }
            </div>
            <div className={style.pieDePagina}></div>
            <Link to= {ruta}><button>Home</button></Link>
            <div className={style.selectorBotones}>


            </div>
        </div>
    )
}