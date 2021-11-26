import { useState } from "react";
import logo from "../../../assets/Logo.png";
import './ProductDetail.css'

const ProductDetail = ({ info }) => {
    const data = JSON.parse(info);
    const [useForm, setUseForm] = useState(false)

    const handleEliminar = () => {
        let userPreference;
        if (window.confirm("Deseas eliminar el producto?")) {
            userPreference = "Producto eliminado!";
            //eliminar producto
            window.location.reload()
        } else {
            userPreference = "Eliminación fallida!";
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

    const handleSubmit = () => {

    }

    const handleGoBack = () => {
        window.location.reload()
    }

    return (
        <>
            <div className="producDetailAll">
                <div className="nav">
                    <img src={logo} alt="Logo" width="30%" />
                </div>

                <div className="subNav"></div>

                <div className="name">
                    <h3>{data.name}</h3>
                </div>

                <div className="eliminar">
                    <button type='button' onClick={() => handleEliminar()}>Eliminar Producto</button>
                </div>

                <div className="actualizar">
                    {useForm ?
                        <button type='button' onClick={(e) => handleNoAct(e)}>No Actualizar</button>
                        :
                        <button type='button' onClick={(e) => handleActualizar(e)}>Actualizar Producto</button>
                    }
                </div>

                <div className="imagen">
                    <img src={data.imagen} alt="imagen" />
                </div>

                {useForm ?
                    <form className="formProduct">
                        <div className="producto">
                            <label htmlFor="name">Nombre del producto</label>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div className="categoria">
                            <label htmlFor="categoria">Categoria</label>
                            <input type="text" name="categoria" id="categoria" />
                        </div>

                        <div className="precio">
                            <label htmlFor="precio">Precio</label>
                            <input type="text" name="precio" id="precio" />
                        </div>

                        <div className="peso">
                            <label htmlFor="Peso">Peso/Lts/Personas</label>
                            <input type="text" name="Peso" id="Peso" />
                        </div>

                        <div className="marca">
                            <label htmlFor="Marca">Marca</label>
                            <input type="text" name="Marca" id="Marca" />
                        </div>

                        <div className="descripcion">
                            <label htmlFor="detalle">Descripción</label>
                            <textarea id="detalle" name="detalle" rows="4" cols="50" />
                        </div>

                        <div className="inputImagen">
                            <label htmlFor="imagen">Imagen</label>
                            <input type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" />
                        </div>

                        <div className="actualizarBoton">
                            <button type='submit' onClick={(e) => handleSubmit(e)}>Agregar</button>
                        </div>

                    </form>
                    :

                    <div className="formProduct">
                        <div className="producto">
                            <p>{data.name}</p>
                        </div>

                        <div className="categoria">
                            <p>{data.categoria}</p>
                        </div>

                        <div className="precio">
                            <p>{data.precio}</p>
                        </div>

                        <div className="peso">
                            <p>{data.name}</p>
                        </div>

                        <div className="marca">
                            <p>{data.name}</p>
                        </div>

                        <div className="descripcion">
                            <p>{data.detalle}</p>
                        </div>

                        <div className="actualizarBoton">
                            <button type='button' onClick={handleGoBack}>volver</button>
                        </div>

                    </div>
                }
                <div className="footer"></div>
            </div>
        </>
    )
}

export default ProductDetail;