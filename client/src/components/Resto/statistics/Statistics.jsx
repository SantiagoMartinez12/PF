import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import serverFinder from "../../../store/deploy/serverFinder";
// import { getAllDetalle } from "../../../store/actions";
import LineChart from "./LineChart";


const Statistics = () => {
    const data = useSelector((state) => state.detalle);
    const dispatch = useDispatch();
    const [datos, setDatos] = useState([])

    useEffect(() => {
        // dispatch(getAllDetalle(IdResto))

        axios.get(serverFinder("estadisticas/google-oauth2|116009200735399076324"))
            .then((json) => {
                setDatos(json.data)
            })
            .catch((error) => {
                console.log(error);
            });


    }, [])

    console.log(datos)
    return (
        <>
            <LineChart />
        </>
    )
}

export default Statistics;