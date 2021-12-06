import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMesa } from "../../../store/actions";
import { useState } from "react";
import { Modal, Button  } from "react-bootstrap";
import './ViewQr.css';

const ViewQr = () => {
    const { restoId } = useParams()
    const dispatch = useDispatch()
    const mesas = useSelector((state) => state.mesas)

    useEffect(() => {
        dispatch(getMesa(restoId));
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h3>Información de mesas</h3>
            <div className="row">
                {mesas[0] ? mesas.map((info) => {
                    return <div className="col-lg-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: '16rem' }}>
                            <ul className="list-group list-group-flush">
                                <div class="card-header text-capitalize">{info.name}</div>
                                <div class="card-body">
                                    <li className="list-group-item">
                                        <Modal
                                        size="sm"
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        >
                                        <Modal.Header closeButton>
                                       <Modal.Title>Código QR</Modal.Title>
                                     </Modal.Header>
                                    <Modal.Body>
                                        <center>
                                    <img src={info.qr}/>
                                        </center>
                                    </Modal.Body>
                                    <Modal.Footer>
                                 <Button variant="secondary" onClick={handleClose}>
                                    Close
                                         </Button>
                                     </Modal.Footer>
                                    </Modal>
                                        <Button variant="primary" size="sm" onClick={handleShow}>
                                         Código QR
                                        </Button>
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

