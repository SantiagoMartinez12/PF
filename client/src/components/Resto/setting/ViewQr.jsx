import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMesa } from "../../../store/actions";
import './ViewQr.css';

const ViewQr = () => {
    const { restoId } = useParams()
    const dispatch = useDispatch()
    const mesas = useSelector((state) => state.mesas)

    useEffect(() => {
        dispatch(getMesa(restoId));
    }, [])

    return (
        <>
            <h3>Informacion de mesas</h3>
            <div className="row">
                {mesas[0] ? mesas.map((info) => {
                    return <div className="col-lg-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                            <ul className="list-group list-group-flush">
                                <div class="card-header">{info.name}</div>
                                <div class="card-body">
                                    <li className="list-group-item">
                                        <a href={info.qr} className="card-link">Codigo QR</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>

                })

                    :
                    <h3>No hay mesas</h3>
                }
            </div>
        </>
    )
}

export default ViewQr;