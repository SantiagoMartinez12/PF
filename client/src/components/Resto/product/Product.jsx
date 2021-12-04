import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsPerCategory from "./ProductsPerCategory";
import FormProduct from "./FormProduct";
import './Product.css';
import ProductDetail from "./ProductDetail";
import { getProductos } from "../../../store/actions";
import { useParams } from "react-router";
// import data from "./data";

const Product = () => {
    const [form, setForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false);
    const [infoDetail, setInfoDetail] = useState({});
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.rawData)
    const {restoId} = useParams()

    useEffect(() => {
        dispatch(getProductos(restoId));

    }, [])

    const handleAddProduct = (e) => {
        e.preventDefault();
        setForm(true);
    }

    return (
        <>
            {showDetail ? <ProductDetail info={infoDetail} /> :
                form ? <FormProduct /> :
                    <div className="prodcutAll">
                        <div className="menu">
                            <button type='button' onClick={(e) => handleAddProduct(e)}>Agregar Producto</button>
                        </div>
                        <div className="contenido">

                            {data.map((categories) => {
                                return <div className='categoriaBox'>
                                    <h4>{categories.name}</h4>
                                    <ProductsPerCategory productos={categories.productos} setShowDetail={setShowDetail} setInfoDetail={setInfoDetail} />
                                </div>
                            })}

                        </div>
                    </div>
            }
        </>
    )
}

export default Product;