import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { deleteProduct, getCategorias, getUpdateProduct } from "../../../store/actions";
import './ProductDetail.css'
var global = require('../../Resto/global.module.css')

const ProductDetail = ({ info }) => {
    const data = JSON.parse(info);

    const [useForm, setUseForm] = useState(false)
    const dispatch = useDispatch()
    const { restoId } = useParams()

    const [updateProduct, setUpdateProduct] = useState({
        id: data.id,
        categoriaId: data.categoriaId,
        name: '',
        precio: 0,
        imagen: '',
        detalle: '',
        categoria: data.categoriaId,
        idResto: restoId
    })
    const [imagenSelected, setImagenSelected] = useState(null)
    const [control, setControl] = useState(null)
    const categorias = useSelector((state) => state.categorias)

    useEffect(() => {

        dispatch(getCategorias(restoId));
        if (control) {
            setUpdateProduct({
                ...updateProduct,
                imagen: control
            });
        }

    }, [control])

    const handleEliminar = () => {
        var userPreference;
        if (window.confirm("¿Deseas eliminar el producto?")) {
            userPreference = "Producto eliminado";
            dispatch(deleteProduct(data.id))
            if (window.confirm("Se ha eliminado el producto")) {
                window.location.reload()
            } else {
                window.location.reload()
            };
        } else {
            userPreference = "Eliminación abortada";
        };
    }

    const handleActualizar = (e) => {
        e.preventDefault();
        setUseForm(true);
    }

    const handleNoAct = (e) => {
        e.preventDefault();
        setUseForm(false);
    }

    const handleForm = (e) => {
        if (e.target.name !== 'imagen') {
            setUpdateProduct({
                ...updateProduct,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getUpdateProduct(updateProduct))
        if (window.confirm("Se ha actualizado el producto")) {
            window.location.reload()
        } else {
            window.location.reload()
        };
    }

    const handleGoBack = () => {
        window.location.reload()
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


    return (
        <>
            <div className="row">
                <div className="col">
                <div className="nav">
                    <h3>Actualizar Producto</h3>
                </div>
                <div className="name">
                    <h3>{data.name}</h3>
                </div>
                </div>
                <div className="col">
                <div className="eliminar">
                    <button type='button' onClick={() => handleEliminar()} className={global.botonnavbar}>Eliminar</button>
                </div>
                <div className="actualizar">
                    {useForm ?
                        <button type='button' onClick={(e) => handleNoAct(e) } className="btn btn-primary me-md-2">No Actualizar</button>
                        :
                        <button type='button' onClick={(e) => handleActualizar(e)} className={global.botonnavbar}>Actualizar</button>
                    }
                </div>
                </div>
                <div className="imagen">
                    <img src={data.imagen} alt="imagen" className="img-thumbnail rounded float-left"/>
                </div>


                {useForm ?
                    <form className="formProduct" onChange={(e) => handleForm(e)}>
                        <div className="producto">
                            <label htmlFor="name">Nombre del producto</label>
                            <input type="text" name="name" id="name" className="form-control"/>
                        </div>

                        <div className="categoria">
                            <label htmlFor="categoria" >Categoria</label>
                            <select name="categoria" id='categoria' className="form-select">
                                <option disabled selected>Selección...</option>
                                {categorias.map((cat) =>
                                    <option value={cat.id}> {cat.name} </option>
                                )}
                            </select>
                        </div>

                        <div className="precio">
                            <label htmlFor="precio">Precio</label>
                            <input type="text" name="precio" id="precio" className="form-control"/>
                        </div>

                        {/* <div className="peso">
                            <label htmlFor="Peso">Peso/Lts/Personas</label>
                            <input type="text" name="Peso" id="Peso" />
                            </div>
                            
                            <div className="marca">
                            <label htmlFor="Marca">Marca</label>
                            <input type="text" name="Marca" id="Marca" />
                        </div> */}

                        <div className="descripcion">
                            <label htmlFor="detalle">Descripción</label>
                            <textarea id="detalle" name="detalle" rows="4" cols="50" className="form-control"/>
                        </div>

                        <div className="inputImagen">
                            <label htmlFor="imagen" className="form-label">Imagen</label>
                            <input onChange={(e) => handleImg(e)} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" className="form-control"/>
                            <br />
                            <img src={control} height="200" alt="Preview..." />
                        </div>

                        <div className="actualizarBoton">
                            <button type='submit' onClick={(e) => handleSubmit(e)} className="btn btn-primary me-md-2">Actualizar</button>
                            <button type='button' onClick={handleGoBack} className="btn btn-primary me-md-2">volver</button>
                            <p className='warning'>Llenar solo los campos que desea actualizar</p>
                        </div>

                    </form>
                    :

                    <div className="formProduct">
                        <div className="producto">
                            <p><b>Nombre del Producto: </b>{data.name}</p>
                        </div>

                        <div className="categoria">
                            <p><b>Categoria: </b> {data.categoria}</p>
                        </div>

                        <div className="precio">
                            <p><b>Precio: </b>{data.precio}</p>
                        </div>

                        {/* <div className="peso">
                            <p>{data.name}</p>
                        </div>

                        <div className="marca">
                            <p>{data.name}</p>
                        </div> */}

                        <div className="descripcion">
                            <p><b>Descripcion del Producto: </b>{data.detalle}</p>
                        </div>

                        <div className="actualizarBoton">
                            <button type='button' onClick={handleGoBack} className="btn btn-primary me-md-2">volver</button>
                        </div>

                    </div>
                }
                <div className="footer"></div>
            </div>
        </>
    )
}

export default ProductDetail;