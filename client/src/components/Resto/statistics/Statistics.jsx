import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import serverFinder from "../../../store/deploy/serverFinder";
import BarChart from "./BarChart";
// import { getAllDetalle } from "../../../store/actions";
import LineChart from "./LineChart";
import PieChartConstructor from "./PieChart";


const Statistics = () => {
    const data = useSelector((state) => state.detalle);
    const dispatch = useDispatch();
    const [datos, setDatos] = useState([]);
    const [datosproductosAgrupados, setDatosProductosAgrupados] = useState([])
    const [datosclientes, setDatosClientes] = useState([]);


    useEffect(() => {
        // dispatch(getAllDetalle(IdResto))

        axios.get(serverFinder("estadisticas/google-oauth2|116009200735399076324"))
            .then((json) => {
                setDatos(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(serverFinder("estadisticas/cliente/google-oauth2|116009200735399076324"))
            .then((json) => {
                setDatosClientes(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(serverFinder("estadisticas/productos/google-oauth2|116009200735399076324"))
            .then((json) => {
                setDatosProductosAgrupados(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    // console.log(datos)
    console.log(datosproductosAgrupados)
    
    const ventas = [];
    datos?.forEach((el) => {
        ventas.push({ value: el.cantidad * el.precio, date: new Date(el.createdAt) })
    })

    const clientes = [];
    datosclientes?.forEach((el) => {
        clientes.push({ value: 1, date: new Date(el.updatedAt) })
    })

    console.log(clientes)
    // console.log(ventas)
    return (
        <>
            {/* <div>
                <LineChart />
            </div>
            <div>
                <BarChart />
            </div>
            <div>
                <PieChartConstructor />
            </div> */}
        </>
    )
}

export default Statistics;