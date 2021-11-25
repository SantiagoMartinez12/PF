import './FormProduct.css'
import logo from "../../../assets/Logo.png";

const FormProduct = () => {

    return (
        <>
            <form action="">
                <div className="grid-container">
                    <div class="nav">
                        <img src={logo} alt="Logo" width="30%" />
                    </div>
                    <div className="subNav"></div>


                    <div className="producto">
                        <label htmlFor="Producto">Nombre del producto</label>
                        <input type="text" name="Producto" id="Producto" />
                    </div>

                    <div className="categoria">
                        <label htmlFor="Categoria">Categoria</label>
                        <input type="text" name="Categoria" id="Categoria" />
                    </div>

                    <div className="precio">
                        <label htmlFor="Precio">Precio</label>
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
                        <label htmlFor="Descripción">Descripción</label>
                        <textarea id="Descripción" name="Descripción" rows="4" cols="50" />
                    </div>

                    <div className="imagen">
                        <label htmlFor="Imagen">Imagen</label>
                        <input type="file" id="Imagen" name="Imagen" accept="image/png, image/jpeg" />
                    </div>

                    <div className="submit">
                        <button type='submit'>Agregar</button>
                    </div>
                    <div className="deleteSearch"></div>
                    <div className="deleteList"></div>
                    <div className="goBack"></div>
                    <div className="footer"></div>
                </div>
            </form>
        </>
    )
}

export default FormProduct;