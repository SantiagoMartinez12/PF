
import { useDispatch } from 'react-redux';
import { agregarTicket, sumaCuenta } from '../../../store/actions';
import cuadrito from "../../../assets/cuadrito.jpg";
var global = require('../../Resto/global.module.css')

export default function ItemCarta({ data, mesaOcupada }) {
    const dispatch = useDispatch();
    const ocupada = mesaOcupada;
    const { id, name, precio, detalle, imagen, disponible } = data;

    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(agregarTicket(id))
        dispatch(sumaCuenta(precio))
    }


    return (
        <div className={global.whitecard}>
            <div className="row">
                <div className="col-sm">
                    <center>
                        <img src={imagen ? imagen : cuadrito} className={global.imgperfil} alt="plato" width="140rem" height="120rem"/>
                    </center>
                </div>
                <div className="col-sm">
                    <center>
                        <h5 className="text-capitalize fw-normal">{name} ${precio}</h5>
                    </center>
                    <p className={global.textdetalle}>{detalle}</p>
                </div>
                {disponible?
                    !ocupada?
                        <center>
                            <button onClick={handleOnClick} className="btn btn-primary" >Agregar</button>
                        </center>
                        : null
                    :
                    <center>
                            <button disabled className="btn btn-primary" >No disponible</button>
                    </center>
                }
            </div>
        </div>
    )
}