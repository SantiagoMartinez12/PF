import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import serverFinder from "../../../store/deploy/serverFinder";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChartConstructor from "./PieChart";


const Statistics = () => {

    const [datos, setDatos] = useState([]);
    const [datosproductosAgrupados, setDatosProductosAgrupados] = useState([])
    const [datosclientes, setDatosClientes] = useState([]);
    const [producto, setProducto] = useState([]);
    const [nameProducto, setNameProducto] = useState('nada')
    const {restoId} = useParams()


    useEffect(() => {

        axios.get(serverFinder(`estadisticas/${restoId}`))
            .then((json) => {
                setDatos(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(serverFinder(`estadisticas/cliente/${restoId}`))
            .then((json) => {
                setDatosClientes(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(serverFinder(`estadisticas/productos/${restoId}`))
            .then((json) => {
                setDatosProductosAgrupados(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    const mayorIngreso = [];
    for (let n = 0; n < 5 && n < datosproductosAgrupados[0]?.length; n++) {
        mayorIngreso.push(datosproductosAgrupados[0]?.[n])
    }

    const mayorVenta = [];
    for (let n = 0; n < 5 && n < datosproductosAgrupados[1]?.length; n++) {
        mayorVenta.push(datosproductosAgrupados[1]?.[n])
    }

    var controlDia;
    const formatData = [];
    var value;
    var cantidad;

    for (let n = 0; n < datos.length; n++) {

        if (n === 0) {
            controlDia = '00';
            value = 0;
            cantidad = 0;
        }

        if (controlDia !== datos[n].createdAt.slice(8, 10)) {

            if (controlDia !== '00') {
                formatData.push({
                    value,
                    cantidad,
                    date: new Date(datos[n - 1].createdAt)
                })
                value = 0;
                cantidad = 0;
                value = (datos[n].cantidad * datos[n].precio) + value;
                cantidad = datos[n].cantidad + cantidad;
                controlDia = datos[n].createdAt.slice(8, 10);
                if (n + 1 === datos.length) {
                    formatData.push({
                        value,
                        cantidad,
                        date: new Date(datos[n].createdAt)
                    })
                }

            } else {
                value = (datos[n].cantidad * datos[n].precio) + value;
                cantidad = datos[n].cantidad + cantidad;
                controlDia = datos[n].createdAt.slice(8, 10);
            }

        } else {
            value = (datos[n].cantidad * datos[n].precio) + value;
            cantidad = datos[n].cantidad + cantidad;
            controlDia = datos[n].createdAt.slice(8, 10);
            if (n + 1 === datos.length) {
                formatData.push({
                    value,
                    cantidad,
                    date: new Date(datos[n].createdAt)
                })
            }
        }
    }

    const clientes = [];

    for (let n = 0; n < datosclientes.length; n++) {

        if (n === 0) {
            controlDia = '00';
            value = 0;
        }

        if (controlDia !== datosclientes[n].updatedAt.slice(8, 10)) {

            if (controlDia !== '00') {
                clientes.push({
                    value,
                    date: new Date(datosclientes[n - 1].updatedAt),
                })
                value = 0;
                value = 1 + value;
                controlDia = datosclientes[n].updatedAt.slice(8, 10);
                if (n + 1 === datosclientes.length) {
                    clientes.push({
                        value,
                        date: new Date(datosclientes[n].updatedAt),
                    })
                }

            } else {
                value = 1 + value;
                controlDia = datosclientes[n].updatedAt.slice(8, 10);
            }

        } else {
            value = 1 + value;
            controlDia = datosclientes[n].updatedAt.slice(8, 10);
            if (n + 1 === datosclientes.length) {
                clientes.push({
                    value,
                    date: new Date(datosclientes[n].updatedAt),
                })
            }
        }
    }

    const sendDataProduct = (productoData) => {
        let controlDia;
        let valueReturn = [];
        let cantidad;

        for (let n = 0; n < productoData.length; n++) {

            if (n === 0) {
                controlDia = '00';
                cantidad = 0;
            }

            if (controlDia !== productoData[n].createdAt.slice(8, 10)) {

                if (controlDia !== '00') {
                    valueReturn.push({
                        cantidad,
                        date: new Date(productoData[n - 1].createdAt),
                    })
                    cantidad = 0;
                    cantidad = productoData[n].cantidad + cantidad;
                    controlDia = productoData[n].createdAt.slice(8, 10);
                    if (n + 1 === productoData.length) {
                        valueReturn.push({
                            cantidad,
                            date: new Date(productoData[n].createdAt),
                        })
                        return valueReturn;
                    }

                } else {
                    cantidad = productoData[n].cantidad + cantidad;
                    controlDia = productoData[n].createdAt.slice(8, 10);
                }

            } else {
                cantidad = productoData[n].cantidad + cantidad;
                controlDia = productoData[n].createdAt.slice(8, 10);
                if (n + 1 === productoData.length) {
                    valueReturn.push({
                        cantidad,
                        date: new Date(productoData[n].createdAt),
                    })
                    return valueReturn;
                }
            }
        }
    }

    const handleProduct = (e) => {
        let name = e.target.value;
        let productoData = datos.filter((el) => el.name === name);
        setProducto(sendDataProduct(productoData));
        setNameProducto(e.target.value);
    }

    return (
        <>
            <div className='lineCharts'>

                <div className='ventas'>
                    <h3>Historial de ingresos por ventas</h3>
                    <LineChart name='ventas' data={formatData} />
                </div>
                <div className='clientes'>
                    <h3>Historial de cantidad de clientes</h3>
                    <LineChart name='clientes' data={clientes} />
                </div>
            </div>

            <div className='pieCharts'>

                <div className='mayorIngreso'>
                    <h3>Productos con más ingresos</h3>
                    <PieChartConstructor name='mayorIngreso' data={mayorIngreso} />
                </div>
                <div className='mayorVenta'>
                    <h3>Productos más vendidos</h3>
                    <PieChartConstructor name='mayorVenta' data={mayorVenta} />
                </div>
            </div>

            <div className='barChar'>
                <h3>Historial de cantidad de ventas por producto</h3>
                <label htmlFor="productoSelected">Producto</label>
                <select onChange={(e) => handleProduct(e)} name="productoSelected" id='productoSelected' className="form-select" aria-label="Default select example">
                    <option disabled selected value='nada'> Seleccionar... </option>
                    {mayorIngreso?.map((el) =>
                        <option value={el.name}> {el.name} </option>
                    )}
                </select>
                <div className='producto'>
                    {nameProducto !== 'nada' ? <BarChart data={producto} name={nameProducto} /> : null}
                </div>
            </div>
        </>
    )
}

export default Statistics;