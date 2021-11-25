import axios from "axios"
import productos from "../../components/Cliente/carta/ejemploCarta";



export function getProductos() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/producto?idResto=b1bd05ae-0156-47a4-9465-324fb6e29c03")
        .then((response) => {
            dispatch({ type: "getProductos", payload: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
    };
};

export function filtroProductos(payload) {
    return {
        type: 'filtroProductos',
        payload
    }
};

export function agregarTicket(payload) {
    return {
        type: 'agregarTicket',
        payload
    }
};

export function restarTicket(payload) {
    return {
        type: 'restarTicket',
        payload
    }
};

export function sumaCuenta(payload) {
    return {
        type: 'sumaCuenta',
        payload
    }
};

export function restaCuenta(payload) {
    return {
        type: 'restaCuenta',
        payload
    }
};

export function buscaProducto(producto) {
    return {
        type: 'buscaProducto',
        payload:producto
    }
};

