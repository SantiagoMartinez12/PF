import {
  AGREGAR_CATEGORIAS,
  BORRAR_CATEGORIAS,
  GET_CATEGORIAS,
} from "../actions";

const initialRestoState = {
  categorias: [],
  productos: [],

  restoInfo: {
    nameResto: "",
    idResto: "84fb67c6-a5b3-4bb1-9920-986e13375739",
  },
};

const restoReducer = (state = initialRestoState, action) => {
  switch (action.type) {
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
    default:
      return {
        ...state,
      };
  }
};

export default restoReducer;
