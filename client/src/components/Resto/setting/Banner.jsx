import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import serverFinder from "../../../store/deploy/serverFinder";


const Banner = () => {
    const { restoId } = useParams()
    const [datos, setDatos] = useState([]);
    const [imagenSelected, setImagenSelected] = useState(null)
    const [control, setControl] = useState(null)
    const [newImg, setNewImg] = useState({
        id: restoId,
        image: '',
    })

    useEffect(() => {
        axios.get(serverFinder(`banner/${restoId}`))
            .then((json) => {
                setDatos(json.data)
            })
            .catch((error) => {
                console.log(error);
            });

        if (control) {
            setNewImg({
                ...newImg,
                image: control
            });
        }
    }, [control])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (control !== null) {
            axios.post(serverFinder(`banner`), newImg)
                .then((response) => {
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
            if (window.confirm("Se ha agregado una nueva Imagen al banner")) {
                window.location.reload()
            } else {
                window.location.reload()
            };

        }
    }

    const handleImg = (e) => {

        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = async function () {
            setControl(reader.result)
        }
        if (file) {
            setImagenSelected(reader.readAsDataURL(file));
        }

    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        axios.delete(serverFinder(`banner?id=${id}`))
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
        if (window.confirm("Se ha eliminado Imagen del banner")) {
            window.location.reload()
        } else {
            window.location.reload()
        };

    };



    console.log(newImg)
    return (
        <>
            <form>
                <div className="imagen">
                    <h3>Imágenes Banner</h3>
                    <p>Cargar imágenes que visualizara el cliente en su apartado</p>
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input onChange={(e) => handleImg(e)} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" className="form-control" />
                    <br />
                    <img src={control} height="200" alt="Preview..." />
                </div>
                <div className="submit">
                    <button className="btn btn-primary me-md-2" type='submit' onClick={(e) => handleSubmit(e)}>Agregar</button>
                </div>
            </form>
            <div>
                {datos[0] ? (
                    datos.map((img) => {
                        return (
                            <div className='card' style={{ width: "18rem" }}>
                                <img className="card-img-top" src={img.image} alt="imagen" />
                                <div className="card-body">
                                    <button type='button' onClick={(e) => handleDelete(e, img.id)} className="btn btn-primary">Eliminar</button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h4>No hay productos cargados</h4>
                )}
            </div>
        </>
    )
}

export default Banner;