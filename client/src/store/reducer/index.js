// import { importar acciones } from "../actions/index"
import productos from "../../components/Cliente/carta/ejemploCarta";
import { categorias } from "../../components/Cliente/carta/ejemploCarta";


const initialState = {
    menuBaseDatos: productos,
    categoriasMenu: categorias,
    productosFiltrados:productos,
    ticket:{},
    
    ClientInfo:{
        name:"",
        id:null
    }
};


const reducer = (state= initialState, action)=>{
    switch(action.type){
        case 'filtroProductos':
            let filtrados = state.menuBaseDatos.filter(p => p.categoria === action.payload)
            return {
                ...state,
                productosFiltrados:filtrados
            }
        case 'sumaTicket':
            // let nuevoTicket = {}
           
            // for(const producto in state.ticket){
                // console.log(`producto ${producto}`)

                // if(action.payload.hasOwnProperty(producto)){
                //     console.log('entré al if')
                //     nuevoTicket[producto] = producto + action.payload.producto
                // }else{
                //     console.log('no entré al if')
                //     console.log(nuevoTicket[producto])
                //     nuevoTicket[producto] = producto
                // }

                // //cerveza:2
            // }
            return {
                ...state,
                ticket: action.payload
            }
        case 'buscaProducto':
            let encontrados = state.menuBaseDatos.filter(p => p.name.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                productosFiltrados:encontrados
            }
        default:
            return state;
    }
}

export default reducer;