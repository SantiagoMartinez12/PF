import { useState } from 'react'
import './ProductsPerCategory.css'
import axios from 'axios'
import serverFinder from '../../../store/deploy/serverFinder'
import { useSelector } from 'react-redux'



const ProductsPerCategory = ({ productos, setShowDetail, setInfoDetail }) => {
    const [current, setCurrent] = useState(1);
    const dataShow = 3;
    const lastData = dataShow * current;
    const firstData = lastData - dataShow;
    const currentDataShow = productos.slice(firstData, lastData);
    const productsDB = useSelector(state=> state.menuBaseDatos);
    

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

    const handleDisponibilidad = (e) =>{
        e.preventDefault();
        let productToChange = productsDB.find(p => p.id === e.target.value);
        
        if(productToChange.disponible){
            axios.put(serverFinder('producto'), {id: e.target.value, disponible:'false'});
        }else{
            axios.put(serverFinder('producto'), {id: e.target.value, disponible:true})
        }
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
                                <h5 className="card-title">{product.name}</h5>
                                <p><b>Precio: </b> $ {product.precio} </p>
                                <span><b>Disponible?:  </b></span> {product.disponible? 
                                                                                <span>SI</span>
                                                                                :
                                                                                <span>NO</span>}
                                <button type='button' onClick={handleDisponibilidad} value={product.id} className="btn btn-secondary">Cambiar</button>
                                <br/>
                                <br/>
                                <button type='button' onClick={(e) => handleSelect(e)} value={JSON.stringify(product)} className="btn btn-primary">Modificar</button>
                            </div>
                        </div>
                        /*  <div className="card" style="width: 18rem;">
                         <img className="card-img-top" src="..." alt="Card image cap">
                         <div className="card-body">
                           <h5 className="card-title">Card title</h5>
                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <a href="#" className="btn btn-primary">Go somewhere</a>
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