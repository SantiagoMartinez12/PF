// import { importar acciones } from "../actions/index"
import {
  AGREGAR_CATEGORIAS,
  BORRAR_CATEGORIAS,
  GET_CATEGORIAS,
} from "../actions";
import { useParams } from "react-router";
import productos from "../../components/Cliente/carta/ejemploCarta";
import { categorias } from "../../components/Cliente/carta/ejemploCarta";
import { INFO_USUARIO, MODIFICAR_USUARIO } from "../actions";

const initialState = {
  menuBaseDatos: [],
  categoriasMenu: [],
  productosFiltrados: [],
  rawData: [],
  ticket: [],
  cuenta: 0,
  //esto lo volamos cuando funcione el back

  ticketCuenta:[],
  usuario:[],


  ClientInfo: {
    nameCliente: "",
    idResto: "",
    idMesa: "",
  },


  categorias: [],
  detalle: [],
  mesas: [],

};
console.log(initialState.usuario)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "filtroProductos":
      let filtrados = state.menuBaseDatos.filter(
        (p) => p.categoria === action.payload
      );
      return {
        ...state,
        productosFiltrados: filtrados,
      };
    case "agregarTicket":
      const nuevoItem = state.menuBaseDatos.find(
        (p) => p.id === action.payload
      );
      const itemsEnTicket = state.ticket.find((p) => p.id === nuevoItem.id);

      return itemsEnTicket
        ? {
            ...state,
            ticket: state.ticket.map((it) =>
              it.id === nuevoItem.id ? { ...it, cantidad: it.cantidad + 1 } : it
            ),
          }
        : {
            ...state,
            ticket: [
              ...state.ticket,
              {
                ...nuevoItem,
                cantidad: 1,
                nameCliente: state.ClientInfo.nameCliente,
                idResto: state.ClientInfo.idResto,
                idMesa: state.ClientInfo.idMesa,
                comentario: "",
              },
            ],
          };

    case "restarTicket":
      return {
        ...state,
        ticket: state.ticket.map((it) =>
          it.id === action.payload ? { ...it, cantidad: it.cantidad - 1 } : it
        ),
      };

    case "buscaProducto":
      let encontrados = state.menuBaseDatos.filter((p) =>
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        productosFiltrados: encontrados,
      };

    case "sumaCuenta":
      return {
        ...state,
        cuenta: state.cuenta + action.payload,
      };

    case "restaCuenta":
      return {
        ...state,
        cuenta: state.cuenta - action.payload,
      };

    // case "getCategorias":
    //   return {
    //     ...state,
    //     categoriasMenu: action.payload,
    //   };

    case "getProductos":
      // el payload trae un array con objetos {name:'categoria', productos:[array de productos]}
      // acá lo convierto para que quede un array de objetos de productos con la propiedad "categoria"
      const arrayProductos = [];
      action.payload.map((categoria) => {
        categoria.productos.map((prod) => {
          prod.categoria = categoria.name;
          arrayProductos.push(prod);
        });
      });
      // del array que nos llega del back saco un array con las categorias
      const arrayCategorias = [];
      action.payload.map((categoria) => {
        arrayCategorias.push(categoria.name);
      });

      return {
        ...state,
        rawData: action.payload,
        menuBaseDatos: arrayProductos,
        productosFiltrados: arrayProductos,
        categoriasMenu: arrayCategorias,
      };
      
      case MODIFICAR_USUARIO:
          return{
            ...state,
            usuario: action.payload,
        }

      case INFO_USUARIO:
        return{
          ...state,
          usuario: action.payload,
        }


    case "getDatosMesa":
      return {
        ...state,
        ClientInfo: action.payload,
      };

    case "resetTicket":
      return {
        ...state,
        ticket: [],
      };
    case "ticketCuenta":
      return {
        ...state,

        ticketCuenta: [...state.ticketCuenta, action.payload],
      };

    case GET_CATEGORIAS:
      return {
        ...state,
        categorias: action.payload,
      };
    case AGREGAR_CATEGORIAS:
      let categoriasActual = state.categorias;
      let sumarCategorias = action.payload;
      let nuevoArrayCategorias = categoriasActual.concat(sumarCategorias);
      return {
        ...state,
        categorias: [...nuevoArrayCategorias],
      };
    case BORRAR_CATEGORIAS:
      return {
        ...state,
      };

      
     
    
    case "GET_DETALLE":
      return{
        ...state,
        detalle: action.payload
      }
      case "GET_MESA":
      return{
        ...state,
        mesas: action.payload
      }


    default:
      return state;
  }
};

export default reducer;
