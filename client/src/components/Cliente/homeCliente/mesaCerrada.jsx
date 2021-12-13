import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import logo from "../../../assets/Logo.png";
import { getDetalle } from "../../../store/actions";
import serverFinder from "../../../store/deploy/serverFinder";
var global = require('../../Resto/global.module.css')


export default function MesaCerrada(){
    const { idCliente } = useParams();
    const dispatch = useDispatch();

    const setPagado =()=>{
        axios.put(serverFinder(`detalle/seguimiento/${idCliente}`), {seguimiento: 'pagado'})
        .catch(err =>console.log(err))
        dispatch(getDetalle(idCliente))
    }

    useEffect(() => {
        setPagado();
    }, [])

   
    return(
        <div className="container">
            <div className={global.centrar}>
                <div className="col-auto  text-center">
                    <div className={global.whiteclientlog}>
                        <img src={logo} alt="Logo" width="50%" className="img-fluid"/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>¡Gracias por tu visita!</h3>
                        <br/>
                        <br/>
                        <br/>
                        <h6>si te quedaste con ganas de más,</h6>
                        <h6>vuelve a escanear el QR y sigue pidiendo!</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}