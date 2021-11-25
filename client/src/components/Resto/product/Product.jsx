import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductsPerCategory from "./ProductsPerCategory";
import FormProduct from "./FormProduct";
import './Product.css';
import data from "./data";

const Product = () => {
    const [form, setForm] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const handleAddProduct = (e) => {
        e.preventDefault();
        setForm(true);
    }

    return (
        <>
            {form ? <FormProduct /> :
                <div className="grid-container">
                    <div className="menu">
                        <button type='button' onClick={(e) => handleAddProduct(e)}>Agregar Producto</button>
                    </div>
                    <div className="contenido">

                        {data.map((categories) => {
                            return <div className='categoriaBox'>
                                <h4>{categories.name}</h4>
                                <ProductsPerCategory productos={categories.productos} />
                            </div>
                        })}

                    </div>
                </div>
            }
        </>
    )
}

export default Product;