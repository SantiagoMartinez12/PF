import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsPerCategory from "./ProductsPerCategory";
import FormProduct from "./FormProduct";
import './Product.css';
import ProductDetail from "./ProductDetail";
import { getProductos } from "../../../store/actions";
import { useParams } from "react-router";

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
                    <div>
                        <div>
                            <button type='button' onClick={(e) => handleAddProduct(e)} className="btn btn-primary me-md-2">Agregar Producto</button>
                        </div>
                        <div>

                            {data[0] ? data.map((categories) => {
                                return <div>
                                    <h4>{categories.name}</h4>
                                    <ProductsPerCategory productos={categories.productos} setShowDetail={setShowDetail} setInfoDetail={setInfoDetail} />
                                </div>
                            })
                        :<h2>No hay productos cargados</h2>
                        }

                        </div>
                    </div>
            }
        </>
    )
}

export default Product;