import { useState } from 'react'
import './ProductsPerCategory.css'

const ProductsPerCategory = ({ productos }) => {
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
            setCurrent(current-1);
        }
    }

    const handleAfter = (e) => {
        e.preventDefault()
        if (current === Math.ceil(productos.length / dataShow)) {
            setCurrent(1);
        } else {
            setCurrent(current+1)
        }
    }

    return (
        <>
            <div class="grid-container">
                <div class="before">
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleBefore(e)}>{'<'}</button> : null}
                </div>
                <div class="after">
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleAfter(e)}>{'>'}</button> : null}
                </div>
                <div class="product">

                    {currentDataShow.map((product) => {
                        return <div className='card'>
                            <h5>{product.name}</h5>
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