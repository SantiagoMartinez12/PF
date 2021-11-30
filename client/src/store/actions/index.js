import axios from "axios"
import productos from "../../components/Cliente/carta/ejemploCarta";
export const INFO_USUARIO = 'INFO_USUARIO'
export const MODIFICAR_USUARIO = 'MODIFICAR_USUARIO'


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

export default function modificarUsuario(){
    return function (dispatch){
        axios.get("http://localhost:3001/api/resto/")
        .then((usuario) => {
            dispatch({
                type: MODIFICAR_USUARIO,
                payload: usuario.data
            })
        })
    }
}

export function infoUsuario(id){
    return function (dispatch){
        axios.get("http://localhost:3001/api/resto/5cffeb91-f981-4d08-b887-ba1408ec5ce4")
        .then((usuario) => {
            dispatch({
                type: INFO_USUARIO,
                payload: usuario.data,
                
            })
            
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}


