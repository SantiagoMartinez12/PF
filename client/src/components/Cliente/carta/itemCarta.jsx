
import { useDispatch } from 'react-redux';
import { agregarTicket, sumaCuenta } from '../../../store/actions';
import cuadrito from "../../../assets/cuadrito.jpg";
import { Card, Button, CardGroup } from 'react-bootstrap';
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
        <div class={global.whitecardmod}>
         <div class="row">
                <div class="col">
                    <center>
                        <img src={imagen ? imagen : cuadrito} className={global.imgperfil} alt="plato" width="140rem" height="120rem"/>
                    </center>
                    <div class={global.btnwhitecardmod}>
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
                <div class="col">
                    <center>
                        <h5 className="text-capitalize fw-normal">{name}</h5>
                        <h5 className="text-capitalize fw-normal">${precio}</h5>
                    </center>
                    <p className={global.textdetalle}>{detalle}</p>
                </div>
               
            </div>
            {/* <Card>
                <Card.Img variant="top" src={imagen ? imagen : cuadrito} />
            <Card.Body>
            <Card.Title>{name} </Card.Title>
            <Card.Text>${precio}</Card.Text>
             <Card.Text>
             {detalle}
             </Card.Text>
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
            </Card.Body>
            </Card>
           */}

            {/* <section class={global.section}>
            <div class={global.whitecard}>
            <div className="row ">
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
            </section> */}
        </div>
    )
}