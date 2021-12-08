import axios from "axios";
import React, { useEffect, useState } from "react";
import { getDetalle, getMesa } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import serverFinder from "../../../store/deploy/serverFinder";

// import s from "../home/detalle.module.css"
var global = require('../../Resto/global.module.css')


export default function Detalle({ idResto, funcion }) {

    const dispatch = useDispatch();
    // const {idCliente , idResto} = useParams()
    const idCliente = useSelector(state => state.idCliente)
    const detalle = useSelector(state => state.detalle)
    const [msj, setMsj] = useState(false)
    /*      console.log(detalle)
      mesaFind = mesa.find(e => e.id === idMesa)
      console.log(mesaFind) */
    let idMesa = detalle.map(e => e.mesaId)

    useEffect(() => {


        dispatch(getMesa(idResto)) // id de resto
    }, [])
    useEffect(() => {

        dispatch(getDetalle(idCliente))
        // id de resto
    }, [idCliente])

    // console.log(detalle)
    let nameCliente = detalle?.map(e => e.namecliente)
    // console.log(nameCliente[0])

    let nameProducto = detalle?.map(e => e.name)
    // console.log(nameProducto)

    let cantidad = detalle?.map(e => e.cantidad)
    let precio = detalle?.map(e => e.precio)

    let seguimiento = {}
    seguimiento = detalle?.map(e => { return { seguimiento: e.seguimiento, id: e.id } })

    const desocuparMesa = (idMesa) => {
        axios.put(serverFinder('mesa'), { id: idMesa, estado: false })
        axios.put(serverFinder('cliente'), { id: idCliente, estado: 'finalizado' })
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        let vali = false
        let validacion = seguimiento.map(e => e.seguimiento)
        let test = validacion.find(e => e === 'confirmado' || e === 'solicitado')
        if(!test){
            vali = true
        }
      
     
        if (vali || nameProducto.length === 0) {
            desocuparMesa(idMesa[0])
            funcion()
            dispatch(getMesa(idResto))
            alert("Su mesa se cerro correctamente")
        } else {
            setMsj(true)
        }

    }

    function handleClickSeguimiento(seguimiento, id) {

        let segui = seguimiento
        if (segui === 'solicitado') {
            segui = 'confirmado'
        }
        else if (segui === 'confirmado') {
            segui = 'entregado'
        }

        let seguimientoPut = { id: id, seguimiento: segui }
        // console.log(seguimientoPut)
        axios.put(serverFinder("detalle/seguimiento"), seguimientoPut)
        dispatch(getDetalle(idCliente))
    }
    function cerrarDetalle(){
        funcion()
    }

    return (
        <div className="container">
            <div>
            <button type="button" class="btn-close" aria-label="Close" onClick={cerrarDetalle}></button>
            </div>
            <div>
                <h4 className="text-center">Cliente</h4>
                <p className="text-center">{nameCliente[0]}</p>
            </div>

            {/* <div claclassNamess="row">
                <div className="col-sm">
                <h5>Producto</h5> 
                <p>{nameProducto.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
                </div>
            </div>
            <div className="col-sm">
                <h5>Cantidad</h5>
                <p>{cantidad.map( e=>{
                    return(
                        <div>
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className="col-sm">
            <h5>Precio</h5>
                <p>{precio.map( e=>{
                    return(
                        <div >
                            {e}
                        </div>
                    )
                    })}</p>
            </div>
            <div className="col-sm">
            <h5>Seguimiento</h5>
                <p>{seguimiento?.map( s=>{
                    return(
                        <div >
                           {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button type="button" class="btn btn-outline-success btn-sm" onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✔ </button>}
                        </div>
                    )
                    })}</p>
            </div> */}

            <Table responsive>
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Seguimiento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul className="list-group list-group-flush">
                                <p>{nameProducto.map(e => {
                                    return (
                                        <li className="list-group-item">
                                            {e}
                                        </li>
                                    )
                                })}</p>
                            </ul>
                        </td>
                        <td>
                            <ul className="list-group list-group-flush">
                                <p>{cantidad.map(e => {
                                    return (
                                        <li className="list-group-item">
                                            {e}
                                        </li>
                                    )
                                })}</p>
                            </ul>
                        </td>
                        <td>
                            <ul className="list-group list-group-flush">
                                <p>{precio.map(e => {
                                    return (
                                        <li className="list-group-item">
                                            {e}
                                        </li>
                                    )
                                })}</p>
                            </ul>
                        </td>
                        <td>
                            <ul className="list-group list-group-flush">
                                <p>{seguimiento?.map(s => {
                                    return (
                                        <li className="list-group-item">
                                            {s.seguimiento} {s.seguimiento === 'entregado' ? null : <button type="button" class={global.botonflechita} onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✓ </button>}
                                        </li>
                                    )
                                })}</p>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <center>
                <div className={global.whitecardmesasresto}>
                    <center>
                        <p className={global.textnotification}> ¿Desea cerrar la mesa? </p>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleOnClick}>Si, cierrala</button>
                    </center>
                </div>
                        {
                            msj === true ? <div class="alert alert-danger" role="alert">
                           ! Tienes productos sin pagar
                          </div> : null
                        }
            </center>
        </div>


    )
}