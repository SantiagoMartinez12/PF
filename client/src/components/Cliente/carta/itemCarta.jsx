
import { useDispatch } from 'react-redux';
import { agregarTicket, sumaCuenta } from '../../../store/actions';
import cuadrito from "../../../assets/cuadrito.jpg";
var global = require('../../Resto/global.module.css')

export default function ItemCarta ({data}){
    const dispatch = useDispatch();

    const {id, name, precio, imagen, detalle, categoria} = data;
    
    const handleOnClick=(e)=>{
        e.preventDefault();
        dispatch(agregarTicket(id))
        dispatch(sumaCuenta(precio))
    }
    

    return(
        <div class={global.whitecard}>
            <div class="row">
                <div class="col-sm">
                <center>
                <img src={cuadrito} class={global.imgperfil}/>
                </center>
                </div>
                <div class="col-sm">
                <center>
                <h5 class="text-capitalize fw-normal">{name} ${precio}</h5>
                </center>
                <p class={global.textdetalle}>{detalle}</p>
                </div>
                <center>
                <button onClick={handleOnClick} class="btn btn-primary" >Agregar</button> 
                </center>
              </div>
        </div>
    )
}

{/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
<button onClick={handleOnClick} class="btn btn-primary me-md-2" >Agregar</button> 
</div> */}