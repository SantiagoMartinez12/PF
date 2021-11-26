import { useState } from 'react'
import './ProductsPerCategory.css'

const ProductsPerCategory = ({ productos ,  setShowDetail ,  setInfoDetail }) => {
    const [current, setCurrent] = useState(1);
    const dataShow = 3;
    const lastData = dataShow * current;
    const firstData = lastData - dataShow;
    const currentDataShow = productos.slice(firstData, lastData);


    const handleBefore = (e) => {
        e.preventDefault();
        if (current === 1) {
            setCurrent(Math.ceil(productos.length / dataShow));
        } else {
            setCurrent(current - 1);
        }
    }

    const handleAfter = (e) => {
        e.preventDefault()
        if (current === Math.ceil(productos.length / dataShow)) {
            setCurrent(1);
        } else {
            setCurrent(current + 1)
        }
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setInfoDetail(e.target.value);
        setShowDetail(true);
    }

    return (
        <>
            <div className="perCategoryALl">
                <div className="before">
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleBefore(e)}>{'<'}</button> : null}
                </div>
                <div className="after">
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleAfter(e)}>{'>'}</button> : null}
                </div>
                <div className="product">

                    {currentDataShow.map((product) => {
                        return <div className='card'>
                            <button type='button' onClick={(e) => handleSelect(e)} value={JSON.stringify(product)}>{product.name}</button>
                            <img src={product.imagen} alt="imagen" />
                            <p>{product.precio}</p>
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductsPerCategory;