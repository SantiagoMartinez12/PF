import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMesa } from "../../../store/actions";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './ViewQr.css';

const ViewQr = () => {
    const { restoId } = useParams()
    const dispatch = useDispatch()
    const mesas = useSelector((state) => state.mesas)

    useEffect(() => {
        dispatch(getMesa(restoId));
    }, [])

    const [show, setShow] = useState(false);
    const [qr, setQr] = useState('');


    const handleClose = (qr) => {
        setShow(false);
        setQr(qr);
    }

    const handleShow = (qr) => {
        setShow(true);
        setQr(qr);
    }

    return (
        <>
            <h3>Información de mesas</h3>
            <div className="row">
                {mesas[0] ? mesas.map((info) => {
                    return <div className="col-lg-4">
                        <div className="card bg-light mb-3" style={{ maxWidth: '16rem' }}>
                            <div className="card-header text-capitalize">{info.name}</div>
                            <div name={info.qr} className="card-body">
                                <Modal
                                    key={info.qr}
                                    size="sm"
                                    show={qr === info.qr && show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Código QR</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <center>
                                            <img src={info.qr} alt="qr" />
                                        </center>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" name={info.qr} onClick={()=>handleClose(info.qr)}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Button variant="primary" size="sm" name={info.qr} onClick={()=>handleShow(info.qr)}>
                                    Código QR
                                </Button>
                            </div>
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