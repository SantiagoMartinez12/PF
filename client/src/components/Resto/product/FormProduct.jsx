import './FormProduct.css'
import logo from "../../../assets/Logo.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../../store/actions';

const FormProduct = () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
        name: '',
        precio: '',
        imagen: '',
        detalle: '',
        categoria: '',
        idResto: '5cffeb91-f981-4d08-b887-ba1408ec5ce4'
    })

    const handleForm = (e) =>{
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postProduct(newProduct))
    }

    const handleGoBack = () => {
        window.location.reload()
    }

    console.log(newProduct);

    return (
        <>
            <form onChange={(e) => handleForm(e)}>
                <div className="grid-container">
                    <div class="nav">
                        <img src={logo} alt="Logo" width="30%" />
                    </div>
                    <div className="subNav"></div>


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

                    <div className="imagen">
                        <label htmlFor="imagen">Imagen</label>
                        <input type="file" id="imagen" name="imagen" accept="image/png, image/jpeg" />
                    </div>

                    <div className="submit">
                        <button type='submit' onClick={(e)=>handleSubmit(e)}>Agregar</button>
                    </div>

                    <br />
                    
                    <div className="deleteSearch">
                        <select name="" id=""></select>
                    </div>
                    <div className="deleteList"></div>
                    <div className="goBack">
                        <button type='button' onClick={handleGoBack}>volver</button>
                    </div>
                    <div className="footer"></div>
                </div>
            </form>
        </>
    )
}

export default FormProduct;