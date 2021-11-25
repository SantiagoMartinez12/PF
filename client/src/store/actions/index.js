import axios from "axios"

export function getCategorias() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/categorias/61a5fe2c-5275-4a22-8281-d194e63ba667")
        .then((response) => {
            dispatch({ type: "getCategorias", payload: response.data });
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

