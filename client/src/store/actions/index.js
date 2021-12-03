import axios from "axios";
import productos from "../../components/Cliente/carta/ejemploCarta";

import Usuario from "../../components/Resto/setting/usuario";

import Detalle from "../../components/Resto/home/detalle";

export const INFO_USUARIO = 'INFO_USUARIO'
export const MODIFICAR_USUARIO = 'MODIFICAR_USUARIO'
export const AGREGAR_CATEGORIAS = 'AGREGAR_CATEGORIAS'
export const GET_CATEGORIAS = "GET_CATEGORIAS";
export const BORRAR_CATEGORIAS = "BORRAR_CATEGORIAS";
export const CREAR_USUARIO ="CREAR_USUARIO";

export function getProductos(idResto) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/api/producto?idResto=${idResto}`)
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
export function ticketCuenta(payload) {
  return {
    type: "ticketCuenta",
    payload,
  };
}

export function crearUsuario(){
    return function (dispatch){
        axios.post("http://localhost:3001/api/resto/")
        .then((usuario) => {
            dispatch({
                type: CREAR_USUARIO,
                payload: usuario.data
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

export const agregarCategorias = (payload) => {
  return async function () {
    console.log("esto es lo que agrego");
    console.log(payload);
    const data = await axios.post(
      "http://localhost:3001/api/categorias/",
      payload
    );
    const posteo = data.data;
    console.log(posteo);
    return {
      type: "AGREGAR_CATEGORIAS",
      payload: posteo,
    };
  };
};

export function getCategorias(idResto) {
  return async function (dispatch) {
    try {
      const resp = await axios.get(
        "http://localhost:3001/api/categorias/84fb67c6-a5b3-4bb1-9920-986e13375739"
      );
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
        .put("http://localhost:3001/api/resto/", obj)
        .then((usuario) => {
          return usuario;
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  export function infoUsuario(id) {
    return function (dispatch) {
      axios
        .get(
          "http://localhost:3001/api/resto/5cffeb91-f981-4d08-b887-ba1408ec5ce4"
        )
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
    const borrando = await axios.delete(
      `http://localhost:3001/api/categorias/${id}`
    );
    const result = borrando.data;
    console.log(result);
    dispatch({ type: BORRAR_CATEGORIAS, payload: result });
  };
};

export function getDetalle(idMesa) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/detalle/mesaId/" + idMesa)
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
      .post(`http://localhost:3001/api/producto`, productObject)
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
      .put(`http://localhost:3001/api/producto`, productObject)
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
      .delete(`http://localhost:3001/api/producto?id=${id}`)
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
        let json = await axios.get("http://localhost:3001/api/mesa/get/" + restoId)
        
           return dispatch({
                type: "GET_MESA",
                payload: json.data
            })  
    };
};


