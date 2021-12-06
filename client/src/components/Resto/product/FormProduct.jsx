import './FormProduct.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorias, postProduct } from '../../../store/actions';
import { useParams } from 'react-router';

const FormProduct = () => {
    const dispatch = useDispatch();
    const { restoId } = useParams()
    const [newProduct, setNewProduct] = useState({
        name: '',
        precio: '',
        imagen: '',
        detalle: '',
        categoria: '',
        idResto: restoId
    })
    const [imagenSelected, setImagenSelected] = useState(null)
    const [control, setControl] = useState(null)

    const regEx = new RegExp(/[A-Za-z0-9]+/g);
    const reg = new RegExp('^[0-9]+$');
    const categorias = useSelector((state) => state.categorias)

    useEffect(() => {
        dispatch(getCategorias(restoId));
        if (control){       
            setNewProduct({
                ...newProduct,
                imagen: control
            });
        }
    }, [control])

    const handleForm = (e) => {
        if (e.target.name !== 'imagen') {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postProduct(newProduct))
        if (window.confirm("Se ha agregado un nuevo producto")) {
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
            <form onChange={(e) => handleForm(e)}>
                <div>
                    <div class="nav">
                        <h3>Agregar Producto</h3>
                    </div>
                    <div className="subNav"></div>


                    <div className="producto">
                        <label htmlFor="name">Nombre del producto</label>
                        <input type="text" name="name" id="name" class="form-control"/>
                        <p>{regEx.test(newProduct.name) ? null : 'Introducir nombre del producto'}</p>
                    </div>

                    <div className="categoria">
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" id='categoria' className="form-select" aria-label="Default select example">
                            <option disabled selected>Selección...</option>
                            {categorias.map((cat) =>
                                <option value={cat.name} > {cat.name} </option>
                            )}
                        </select>
                        <p>{regEx.test(newProduct.categoria) ? null : 'seleccionar categoria'}</p>
                    </div>

                    <div className="precio">
                        <label htmlFor="precio" >Precio</label>
                        <input type="text" name="precio" id="precio" class="form-control"/>
                        <p>{reg.test(newProduct.precio) ? null : 'Introducir Precio'}</p>
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

                    <div className="imagen">
                        <label htmlFor="imagen" className="form-label">Imagen</label>
                        <input onChange={(e) => handleImg(e)} type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" className="form-control"/>
                        <br />
                        <img src={control} height="200" alt="Image preview..." />
                    </div>

                    <div className="submit">
                        <button className="btn btn-primary me-md-2" type='submit' onClick={(e) => handleSubmit(e)}>Agregar</button>
                    </div>

                    <br />

                    <div className="goBack">
                        <button className="btn btn-primary me-md-2" type='button' onClick={handleGoBack}>volver</button>
                    </div>
                    <div className="footer"></div>
                </div>
            </form>
        </>
    )
}

export default FormProduct;