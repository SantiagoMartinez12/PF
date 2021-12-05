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
        <div className="container-fluid">
            <div class="row">
                <div class="col">
                <div>
                <img src={logo} alt="Logo" width="10%"  class="navbar-brand" />
                <div><h1>Mozo Virtual</h1></div>
                </div>
                
                <div className={style.navBar}>
            <div >
                <div className={style.component}>
                    <button onClick={(e) => { handleUsuario(e) }} className={style.botonsito}>
                        <box-icon type='solid' name='user-detail'></box-icon>
                        Info. de Usuario</button>
                </div>
            </div>
            <div>
                <div className={style.component}>
                    <button onClick={(e) => { handleCategorias(e) }} className={style.botonsito}>
                        <box-icon name='cart'></box-icon>
                        Categorias</button>
                </div>
            </div>
            <div >
                <div className={style.component}>
                    <button onClick={(e) => { handleProduct(e) }} className={style.botonsito}>
                        <box-icon name='restaurant'></box-icon>
                        Productos</button>
                </div>
            </div>
            <div >
                <div className={style.component}>
                    <button className={style.botonsito}>
                        <box-icon name='credit-card' type='solid' ></box-icon>
                        Medios de pagos</button>
                </div>
            </div>

            <div >
                <div className={style.component}>
                    <button onClick={(e) => handleQr(e)} className={style.botonsito}>
                        <box-icon name='codigoQr' type='solid' ></box-icon>
                        Visualizar Qr</button>
                </div>
            </div>

            </div>

                </div>
                <div class="col">
                <div className={style.display}>
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
            <div className={style.pieDePagina}></div>
            <Link to= {ruta}><button>Home</button></Link>
            <div className={style.selectorBotones}>
            </div>
                </div>
            </div>
   
      

            
        </div>
    )
}