import axios from "axios"

import Detalle from "../../components/Resto/home/detalle";
export const INFO_USUARIO = 'INFO_USUARIO'



export function getProductos(idResto) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/producto?idResto=${idResto}`)
        .then((response) => {
            dispatch({ type: "getProductos", payload: response.data });
        })
        .catch((err) => {
            console.log(err)
        })
    };
};
export function getDatosMesa(payload){
    return {
        type: "getDatosMesa",
        payload
    }
}

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
export function resetTicket(){
    return {
        type: 'resetTicket',
        
    }
}
export function ticketCuenta(payload){
    return {
        type:'ticketCuenta',
        payload
    }
}


export function infoUsuario(id){
    return function (dispatch){
        axios.get("http://localhost:3001/api/resto/5b58f33f-8cee-4934-aa4a-43a6535fa880")
        .then((usuario) => {
            dispatch({
                type: INFO_USUARIO,
                payload: usuario.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export function getDetalle(idMesa){
    return function(dispatch){
        axios.get("http://localhost:3001/api/detalle/mesaId/" + idMesa)
        .then((json) => {
            dispatch({
                type: "GET_DETALLE",
                payload: json.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }

}
//actions to delete, update and create products RESTO

export function postProduct(productObject) {
    return function (dispatch) {
        axios.post(`http://localhost:3001/api/producto`, productObject)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err)
        })
    };
};

export function getUpdateProduct(productObject) {
    return function (dispatch) {
        axios.put(`http://localhost:3001/api/producto`, productObject)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err)
        })
    };
};

export function deleteProduct(id) {
    return function (dispatch) {
        axios.delete(`http://localhost:3001/api/producto?id=${id}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log(err)
        })
    };
};
