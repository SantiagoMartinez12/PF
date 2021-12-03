import { useState } from "react";
import style from "./setting.module.css"
import { Link } from 'react-router-dom'
import Usuario from "./usuario";
import Categorias from "./Categorias";
import 'boxicons'
import { useDispatch, useSelector } from "react-redux";
import { infoUsuario } from "../../../store/actions";
import Product from "../product/Product";
import { useParams } from "react-router";



export default function Setting() {
    const [iUsuario, setIUsuario] = useState(false)
    const [infoCategorias, setInfoCategorias] = useState(false)
    const [product, setProduct] = useState(false)
    const info = useSelector((state) => state.usuario)
    const dispatch = useDispatch()
    const {restoId} = useParams()
    const ruta = `/home/resto/${restoId}`

    function handleUsuario(e) {
        if (iUsuario === false) {
            e.preventDefault();
            setIUsuario(true)
            dispatch(infoUsuario(restoId))
            setInfoCategorias(false)
            setProduct(false)
        } else {
            e.preventDefault();
            setIUsuario(false)
        }

    }
    function handleCategorias(e) {
        if (infoCategorias === false) {
            e.preventDefault();
            setInfoCategorias(true)
            setIUsuario(false)
            setProduct(false)
        } else {
            e.preventDefault();
            setInfoCategorias(false)
        }
    }

    function handleProduct(e) {
        if (product === false) {
            e.preventDefault();
            setProduct(true)
            setIUsuario(false)
            setInfoCategorias(false)
        } else {
            e.preventDefault();
            setProduct(false)
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
                    <Link to='/mediosDePago'><button>
                        <box-icon name='credit-card' type='solid' ></box-icon>
                        Medios de pagos</button></Link>
                </div>

            </div>


            <div className={style.display}>
                {iUsuario === true ? info.map((el) => {
                    return <Usuario key={el.id} image={el.imagen} name={el.name} usuario={el.usuario} contraseña={el.contraseña} mail={el.mail} mesa={el.mesa} />
                }) : <></>}

                {infoCategorias === true ? <Categorias /> : <></>
                }

                {product === true ? <Product /> : <></>
                }
            </div>
            <div className={style.pieDePagina}></div>
            <Link to= {ruta}><button>Home</button></Link>
            <div className={style.selectorBotones}>


                {/* {infoUsuario===true?<Usuario/>
                    : <></>
                } */}


            </div>
        </div>
    )
}