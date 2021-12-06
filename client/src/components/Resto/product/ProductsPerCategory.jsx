import { useState } from 'react'
import './ProductsPerCategory.css'

const ProductsPerCategory = ({ productos, setShowDetail, setInfoDetail }) => {
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
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleBefore(e)} className="btn btn-outline-primary">{'<'}</button> : null}
                </div>
                <div className="after">
                    {productos.length > 3 ? <button type='button' onClick={(e) => handleAfter(e)} className="btn btn-outline-primary">{'>'}</button> : null}
                </div>
                <div className="product">

                    {currentDataShow.map((product) => {
                        return <div className='card' style={{ width: "18rem" }}>
                            <img className="card-img-top" src={product.imagen} alt="imagen" />
                            <div className="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p><b>Precio: </b> $ {product.precio} </p>
                                <button type='button' onClick={(e) => handleSelect(e)} value={JSON.stringify(product)} className="btn btn-primary">Modificar</button>
                            </div>
                        </div>
                        /*  <div class="card" style="width: 18rem;">
                         <img class="card-img-top" src="..." alt="Card image cap">
                         <div class="card-body">
                           <h5 class="card-title">Card title</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                         </div>
                       </div> */
                    })
                    }
                </div>
            </div>

        </>
    )
}

export default ProductsPerCategory;