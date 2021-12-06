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
import logo from "../../../assets/Logo.png"
import ViewQr from "./ViewQr";
import logowhite from "../../../assets/Logo_white.png";
var global = require('../../Resto/global.module.css')



export default function Setting() {
    const info = useSelector((state) => state.usuario)
    const [iUsuario, setIUsuario] = useState(false)
    const [infoCategorias, setInfoCategorias] = useState(false)
    const [product, setProduct] = useState(false)
    const [mediosDePago, setMediosDePago] = useState(false)
    const [qr, setQr] = useState(false)
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
            setQr(false)
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
            setQr(false)
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
            setQr(false)
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
                setQr(false)
        }else{
           
            setMediosDePago(false)
        }

    }

    function handleQr(e) {
        if (qr === false) {            
            setQr(true)
            setIUsuario(false)
            setInfoCategorias(false)
            setMediosDePago(false)
            setProduct(false)
        } else {
            
            setQr(false)
        }
    }

    return (
        <div>
        <div className="container">
            <div class="row">   
            <div class="col">
                <img src={logo} alt="Logo" width="25%"  class="navbar-brand" />
                <h1>Configuración</h1>
            </div>
            <div class="col">
                <Link to= {ruta}><button class={global.botonnavbar}>Home</button></Link>
            </div>
            <div class="row">
                <div class="col">
                <div>
                    <button onClick={(e) => { handleUsuario(e) }} class={global.btcardsettings}>
                        <box-icon type='solid' name='user-detail'></box-icon>
                        Info. de Usuario</button>
                </div>
                <div>
                    <button onClick={(e) => { handleCategorias(e) }} class={global.btcardsettings}>
                        <box-icon name='cart'></box-icon>
                        Categorias</button>
                </div>
                <div>
                    <button onClick={(e) => { handleProduct(e) }} class={global.btcardsettings}>
                        <box-icon name='restaurant'></box-icon>
                        Productos</button>
                </div>
                <div>
                    <button class={global.btcardsettings}>
                        <box-icon name='credit-card' type='solid' ></box-icon>
                        Medios de pagos</button>
                </div>
                <div>
                    <button onClick={(e) => handleQr(e)} class={global.btcardsettings}>
                        <box-icon name='codigoQr' type='solid' class={global.icon} ></box-icon>
                        Visualizar Qr</button>
                </div>
                </div>
                <div class="col">
                <div class={global.settingsinfo}>
                {iUsuario === true ? <Usuario />
                 : <></>}

                {infoCategorias === true ? <Categorias /> : <></>
                }

                {product === true ? <Product /> : <></>
                }

                {mediosDePago === true ? <MediosDePago /> : <></>
                }

                {qr === true ? <ViewQr /> : <></>
                }
            </div>  
                </div>
            </div>
        </div>
    </div>
    <footer class={global.footer}>
        <img src={logowhite} height="55px"/>
    </footer>
    </div>
    )
}