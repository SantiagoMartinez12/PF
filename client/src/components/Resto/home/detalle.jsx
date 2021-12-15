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
     const [modifica,setModifica] = useState(false)
    const detalle = useSelector(state => state.detalle)
    const [msj, setMsj] = useState(false)
    const [clientes, setClientes] = useState()
    const [eliminar,setEliminar] = useState()
    const [emergente, setEmergente] = useState(false)
    const [mesaEliminada , setMesaEliminada] = useState(false)
    const [pagado , setPagado] = useState(false)
    const [cuenta, setCuenta] = useState([]);
    const [totalCuenta, setTotalCuenta] = useState(0)

    /*      console.log(detalle)
      mesaFind = mesa.find(e => e.id === idMesa)
      console.log(mesaFind) */
    let idMesa = detalle.map(e => e.mesaId)

    function updateMesa(){
        axios.get(serverFinder(`cliente/cliente/${idCliente}`))
            .then(res =>{
                setClientes(res.data.comentario)
            })

    }

    useEffect(() => {
        dispatch(getMesa(idResto)) // id de resto
    }, [])

    useEffect(() => {
        dispatch(getDetalle(idCliente))
        updateMesa()
        // id de resto
    }, [idCliente])

    let seguimiento = []

    useEffect(() => {
        seguimiento1()
    },[seguimiento])
    useEffect(() => {
        valiTodoPagado()
    },[])
    useEffect(() => {
        actualizaCuenta()
    },[])
    


    let nameCliente = detalle?.map(e => e.namecliente)
    // console.log(nameCliente[0])

    let nameProducto = detalle?.map(e => { return {name:e.name, id:e.id, seguimiento:e.seguimiento}})
    // console.log(nameProducto)
    

    let cantidad = detalle?.map(e => e.cantidad)
    let precio = detalle?.map(e => e.precio)
    // ----total de cuenta----- //
    /* let precioTotal = 0
    for (let i = 0; i < precio.length; i++){
        precioTotal = precio[i] + precioTotal
    } */
    const actualizaCuenta = () => {
        axios.get(serverFinder(`detalle/idcliente/${idCliente}`))
            .then(res => {
                // calculo del total a pagar para renderizar
                setCuenta(res.data);
                let total = '';
                let subtotales = [];
                const reducer = (a, b) => a + b;
                if (res.data.length) {
                    res.data.forEach(it => {
                        subtotales.push(it.precio * it.cantidad)
                    });
                    total = subtotales.reduce(reducer);
                    setTotalCuenta(total)
                }
            })
    }
    //----------------------//

    seguimiento = detalle?.map(e => { return { seguimiento: e.seguimiento, id: e.id } })   
    let comentario = detalle?.map(e=> e.comentario)
   
    

    function seguimiento1(){
        axios.get(serverFinder(`detalle/idcliente/${idCliente}`))
        .then(res => {
            let seguimientofilter = res.data.filter(e => e.seguimiento === 'solicitado')
            
            if(seguimientofilter.length === 0){
                axios.put(serverFinder('cliente'), {nuevoPedido: false, id: idCliente})
        }})
   
/*      let pedido = false
    let filtradoSeguimiento = seguimientofilter.filter(e => e === 'solicitado')
    console.log(filtradoSeguimiento.length)
        pedido = true
        
    } 
    if(pedido){
        axios.put(serverFinder('cliente'), {nuevoPedido: false, id: idCliente})
    }  */
}
    const desocuparMesa = (idMesa) => {
        axios.put(serverFinder('mesa'), { id: idMesa, estado: false })
        axios.put(serverFinder('cliente'), { id: idCliente, estado: 'finalizado' })
    }
    function valiTodoPagado(){
    let filtroSeguimiento = seguimiento.map(e => e.seguimiento)
    
    let todoPagado = filtroSeguimiento.find(e => e === 'confirmado' || e === 'solicitado' || e=== 'entregado')
    if(!todoPagado){
        setPagado(true)
    }
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
            setMesaEliminada(true)
            desocuparMesa(idMesa[0])
            funcion()
            dispatch(getMesa(idResto))
            
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
    function handleClickModifica(){
        if(modifica === false){
        setModifica(true)
    }else {
        setModifica(false)
    }
    }
    function handleClickEliminar(e,name, id){
       axios.delete(serverFinder("detalle/" + id))
       dispatch(getDetalle(idCliente))
       EliminarProducto(name)
       setEmergente(true)
       //alert("se elimino Correctamente, le avisaremos a tu comensal")
    }
    function EliminarProducto(name){
        axios.put(serverFinder('cliente'), { id: idCliente, pedidoModificado: name })
    }
    function handleOnClickemergente(){
        setEmergente(false)
    }
   /*  function handleOnClickemergenteMesa(){
        setEmergenteMesa(false)
    } */
  function handleOnClickCerrar(){
      setMesaEliminada(true)
    desocuparMesa(idMesa[0])
    funcion()
    dispatch(getMesa(idResto))
    //alert("su mesa se cerro correctamente...")
  }
  function handleOnClickmesaEliminada(){
    setMesaEliminada(false)
}
  
   
    return (
        <div className="container-fluid">
            <div>
            <button type="button" class="btn-close" aria-label="Close" onClick={cerrarDetalle}></button>
            </div>
            <div>
                <h4 className="text-center">Cliente</h4>
                <p className="text-center text-capitalize">{nameCliente[0]}</p>
                <center>
                <button type="button" class="btn btn-primary"  onClick={(e) => {handleClickModifica()}} >Modificar productos</button>
                </center>
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
                                <p>{nameProducto.map(el => {
                                    return (
                                        <li className="list-group-item">
                                            {
                                               modifica === true && el.seguimiento === "solicitado" ? <button 
                                               type="button" class={global.botoncierre}
                                               width="1px" height="1px"
                                                                    onClick={(e) => {handleClickEliminar(e,el.name, el.id)}}>X
                                                                      
                                                                    </button> : null
                                            }
                                            {el.name}
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
                                            {s.seguimiento} {s.seguimiento === 'entregado'|| s.seguimiento === 'pagado'  ? 
                                            null 
                                            : 
                                            <button type="button" class={global.botonflechita} onClick={(e) => handleClickSeguimiento(s.seguimiento, s.id)}> ✓ </button>}
                                        </li>
                                    )
                                })}</p>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <center>
            <div className={global.underlinecard}>
            <h5>TOTAL: ${totalCuenta}</h5>
            </div>
                
                    {
                        clientes ? 
                        <div>
                        <h5>Comentario</h5>
                        <p>{clientes}</p> 
                        </div> : null
                    }
            {/*         <h5>Comentario</h5>
                   <p>{clientes}</p> */}
                   

                    
            
                
                
                {
                 emergente ?
                
                <div className="body_aviso">
                    <div className="container_aviso">
                        <center>
                            <h5> Su pedido se borro correctamente</h5>
                            <i class="bi bi-check-circle"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" color="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>

                  <h6> Le avisaremos a tu comensal </h6>

                    <button onClick={handleOnClickemergente} id='boton_cerrar' className="btn btn-primary">Cerrar</button>
                </center>
            </div>    
        </div>
        : null
                }

            
            
            <center>
                <div className={global.whitecardmesasresto}>
                    <center>
                        <p className={global.textnotification}> ¿Desea cerrar la mesa? </p>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleOnClick}>Si, cierrala</button>
                    </center>
                </div>
                        {
                         msj === true ? 
                            <div class="alert alert-danger" role="alert">
                           ! Tienes productos sin pagar ¡ <br></br>
                           <button type="button" className="btn btn-primary btn-sm" onClick={handleOnClickCerrar}>Cerrar de todas maneras</button>
                          </div> : null
                        }
                             {
                 mesaEliminada ? 
            <div className="body_aviso">
            <div className="container_aviso">
                <center>
                  <h5> Mesa cerrada correctamente</h5>
                  <i class="bi bi-check-circle"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" color="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                 <button onClick={handleOnClickmesaEliminada} id='boton_cerrar' className="btn btn-primary">Cerrar</button>
                </center>
            </div>    
        </div>

        : null
            
                }  
                 {
                    pagado ? 
                <div className={global.whitecardmesasresto}>
                    <center>
                        <p className={global.textnotification}> Su cliente ya abono  </p>
                        
                    </center>
                </div> : null
                }
                </center>
                </center>
        </div>


    )
}
