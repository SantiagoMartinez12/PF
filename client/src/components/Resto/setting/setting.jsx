// import style from "./setting.module.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
import Usuario from "./usuario";
import Categorias from "./Categorias";
import { useDispatch } from "react-redux";
import { infoUsuario } from "../../../store/actions";
import Product from "../product/Product";
import MediosDePago from "./MediosDePago";
import { useParams } from "react-router";
import logo from "../../../assets/Logo.png"
import ViewQr from "./ViewQr";
import logowhite from "../../../assets/Logo_white.png";
import 'boxicons'
import Statistics from "../statistics/Statistics";
var global = require('../../Resto/global.module.css')



export default function Setting() {
    const [iUsuario, setIUsuario] = useState(false)
    const [infoCategorias, setInfoCategorias] = useState(false)
    const [product, setProduct] = useState(false)
    const [mediosDePago, setMediosDePago] = useState(false)
    const [qr, setQr] = useState(false)
    const [stadistics, setStadistics] = useState(false)
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
            setStadistics(false)
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
            setStadistics(false)
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
            setStadistics(false)
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
                setStadistics(false)
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
            setStadistics(false)
        } else {
            
            setQr(false)
        }
    }

    function handleStadistics(e) {
        if (qr === false) {            
            setStadistics(true)
            setIUsuario(false)
            setInfoCategorias(false)
            setMediosDePago(false)
            setProduct(false)
            setQr(false)
        } else {
            
            setStadistics(false)
        }
    }

    return (
        <div>
        <div className="container">
            <div className="row">   
            <div className="col">
                <img src={logo} alt="Logo" width="15%"  className="navbar-brand" />
                <h1>Configuración</h1>
            </div>
            <div className="col">
                <Link to= {ruta}><button className={global.botonnavbar}>Home</button></Link>
            </div>
            <div className="row">
                <div className="col">
                <div>
                    <button onClick={(e) => { handleUsuario(e) }} className={global.btcardsettings}>
                        <box-icon type='solid' name='user-detail'></box-icon>
                        Info. de Usuario</button>
                </div>
                <div>
                    <button onClick={(e) => { handleCategorias(e) }} className={global.btcardsettings}>
                        <box-icon name='cart'></box-icon>
                        Categorias</button>
                </div>
                <div>
                    <button onClick={(e) => { handleProduct(e) }} className={global.btcardsettings}>
                        <box-icon name='restaurant'></box-icon>
                        Productos</button>
                </div>
                <div>
                    <button className={global.btcardsettings}>
                        <box-icon name='credit-card' type='solid' ></box-icon>
                        Medios de pagos</button>
                </div>
                <div>
                    <button onClick={(e) => handleQr(e)} className={global.btcardsettings}>
                    <box-icon name='qr-scan'></box-icon>
                        Visualizar QR</button>
                </div>
                <div>
                    <button onClick={(e) => handleStadistics(e)} className={global.btcardsettings}>
                    <box-icon name=''></box-icon>
                        Estadísticas</button>
                </div>
                </div>
                <div className="col">
                <div className={global.settingsinfo}>
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

                {qr === true ? <ViewQr /> : <></>
                }

                {stadistics === true ? <Statistics /> : <></>
                }
            </div>  
                </div>
            </div>
        </div>
    </div>
    <footer className={global.footer}>
        <img src={logowhite} height="55px" alt="logo"/>
    </footer>
    </div>
    )
}