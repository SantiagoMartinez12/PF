// import Usuario from "../../components/Resto/setting/usuario";
// import Detalle from "../../components/Resto/home/detalle";
import axios from "axios";
import serverFinder from "../deploy/serverFinder";
export const INFO_USUARIO = "INFO_USUARIO";
export const MODIFICAR_USUARIO = "MODIFICAR_USUARIO";
export const AGREGAR_CATEGORIAS = "AGREGAR_CATEGORIAS";
export const GET_CATEGORIAS = "GET_CATEGORIAS";
export const BORRAR_CATEGORIAS = "BORRAR_CATEGORIAS";
export const CREAR_USUARIO = "CREAR_USUARIO";
export const ALL_RESTO = "ALL_RESTO";
export const DELETE_RESTO = "DELETE_RESTO"

export function getProductos(idResto) {
  return function (dispatch) {
    axios
      .get(serverFinder(`producto?idResto=${idResto}`))
      .then((response) => {
        dispatch({ type: "getProductos", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function getDatosMesa(payload) {
  return {
    type: "getDatosMesa",
    payload,
  };
}

export function filtroProductos(payload) {
  return {
    type: "filtroProductos",
    payload,
  };
}

export function agregarTicket(payload) {
  return {
    type: "agregarTicket",
    payload,
  };
}

export function restarTicket(payload) {
  return {
    type: "restarTicket",
    payload,
  };
}

export function sumaCuenta(payload) {
  return {
    type: "sumaCuenta",
    payload,
  };
}

export function restaCuenta(payload) {
  return {
    type: "restaCuenta",
    payload,
  };
}

export function buscaProducto(producto) {
  return {
    type: "buscaProducto",
    payload: producto,
  };
}
export function resetTicket() {
  return {
    type: "resetTicket",
  };
}
export function getCuenta(idCliente) {
  return function (dispatch) {
    axios
      .get(serverFinder(`detalle/idcliente/${idCliente}`))
      .then((response) => {
        dispatch({ type: "getCuenta", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function crearUsuario(obj) {
  return function (dispatch) {
    axios
      .post(serverFinder("resto/"), obj)
      .then((usuario) => {
        dispatch({
          type: CREAR_USUARIO,
          payload: usuario.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const agregarCategorias = (payload) => {
  return async function () {
    const data = await axios.post(serverFinder("categorias/"), payload);
    const posteo = data.data;
    // console.log(posteo);
    return {
      type: "AGREGAR_CATEGORIAS",
      payload: posteo,
    };
  };
};

export function getCategorias(idResto) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(serverFinder("categorias/" + idResto));
      const result = resp.data;
      dispatch({ type: GET_CATEGORIAS, payload: result });
    } catch (err) {
      console.log(err);
    }
  };
}
export default function modificarUsuario(obj) {
  return function (dispatch) {
    axios
      .put(serverFinder("resto/"), obj)
      .then((usuario) => {
        return usuario;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function infoUsuario(id) {
  return function (dispatch) {
    axios
      .get(serverFinder("resto/" + id))
      .then((usuario) => {
        dispatch({
          type: INFO_USUARIO,
          payload: usuario.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const borrarCategorias = (id) => {
  return async function (dispatch) {
    const borrando = await axios.delete(serverFinder(`categorias/${id}`));
    const result = borrando.data;
    dispatch({ type: BORRAR_CATEGORIAS, payload: result });
  };
};

export function getDetalle(idCliente) {
  return function (dispatch) {
    axios
      .get(serverFinder("detalle/idcliente/" + idCliente))
      .then((json) => {
        dispatch({
          type: "GET_DETALLE",
          payload: json.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//actions to delete, update and create products RESTO

export function postProduct(productObject) {
  return function (dispatch) {
    axios
      .post(serverFinder(`producto`), productObject)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getUpdateProduct(productObject) {
  return function (dispatch) {
    axios
      .put(serverFinder(`producto`), productObject)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteProduct(id) {
  return function (dispatch) {
    axios
      .delete(serverFinder(`producto?id=${id}`))
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getMesa(restoId) {
  return async function (dispatch) {
    let json = await axios.get(serverFinder("mesa/get/" + restoId));

    return dispatch({
      type: "GET_MESA",
      payload: json.data,
    });
  };
}

export function getIdClienteToState(payload){
  return { 
    type: "GET_ID_CLIENTE",
    payload}
}

export function allResto(){
  return async function(dispatch) {
    let restos = await axios.get(serverFinder("resto"));
    return dispatch({
      type: "ALL_RESTO",
      payload: restos.data,
    })
  }
}

export function deleteResto(restoId) {
  return async function (dispatch) {
    let fundioResto = await axios.delete(serverFinder("resto/" + restoId))
    return dispatch({
      type: "DELETE_RESTO",
      payload: fundioResto.data
    })
  }
}

export function setDatosMesa(payload){
  return{
    type:"setDatosMesa",
    payload
    }
}

export function setPedidoModificado(payload){
  return{
    type:"setPedidoModificado",
    payload
  }
}