import axios from "axios"

export function myFunction() {
    return function (dispatch) {
        axios.get("http://localhost:3001/ ruta del back")
        .then((response) => {
            dispatch({ type: "my action", payload: response.data });
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

export function sumaTicket(payload) {
    return {
        type: 'sumaTicket',
        payload
    }
};

export function buscaProducto(producto) {
    return {
        type: 'buscaProducto',
        payload:producto
    }
};

