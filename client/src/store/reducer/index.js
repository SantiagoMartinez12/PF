// import { importar acciones } from "../actions/index"
import productos from "../../components/Cliente/carta/ejemploCarta";
import { categorias } from "../../components/Cliente/carta/ejemploCarta";

const initialState = {
  menuBaseDatos: productos,
  categoriasMenu: [],
  productosFiltrados: productos,
  ticket: [],
  cuenta: 0,

  ClientInfo: {
    name: "",
    id: null,
  },
};

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
            ticket: [...state.ticket, { ...nuevoItem, cantidad: 1 }],
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
    
    case "getCategorias":
      return {
        ...state,
        categoriasMenu: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
