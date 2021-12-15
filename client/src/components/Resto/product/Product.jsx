import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsPerCategory from "./ProductsPerCategory";
import FormProduct from "./FormProduct";
import "./Product.css";
import ProductDetail from "./ProductDetail";
import { getProductos } from "../../../store/actions";
import { useParams } from "react-router";
import Buscador from "./Buscador";
import { filtroProductos} from '../../../store/actions';
import { Carousel } from '@trendyol-js/react-carousel';

//Filtros del resto terminados
const Product = () => {
  const [form, setForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showFiltrados, setShowFiltrados] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);
  const [infoDetail, setInfoDetail] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rawData);
  const { restoId } = useParams();
  const filtrados = useSelector((state) => state.productosFiltrados);

  useEffect(() => {
    dispatch(getProductos(restoId));
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setForm(true);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setShowFiltrados(false);
    setShowCategorias(false);
  };
  const handleFiltroCategorias = (e) => {
    dispatch(filtroProductos(e.target.value),
    setShowCategorias(true))
  };

  return (
    <>
      
      {showFiltrados ? (
        <>
        <div>
        <Buscador setShowFiltrados={setShowFiltrados} />
      </div>
          <button type="button" className="btn btn-primary me-md-2" onClick={(e) => handleReset(e)}>
            Volver
          </button>
          <ProductsPerCategory
            productos={filtrados}
            setShowDetail={setShowDetail}
            setInfoDetail={setInfoDetail}
          />
        </>
      ) : showCategorias ? (
        <>
        <div>
        <Buscador setShowFiltrados={setShowFiltrados} />
      </div>
        <button type="button" className="btn btn-primary me-md-2" onClick={(e) => handleReset(e)}>
            Volver
          </button>
        <ProductsPerCategory
            productos={filtrados}
            setShowDetail={setShowDetail}
            setInfoDetail={setInfoDetail}
          />
          </>
      ) :     
      
      showDetail ? (
        <ProductDetail info={infoDetail} />
      ) : form ? (
        <FormProduct />
      ) : (
        <div>
          <div>
            <h2>Productos</h2>
          </div>
          <div className="marginBottom">
            <button
              type="button"
              onClick={(e) => handleAddProduct(e)}
              className="btn btn-primary me-md-2"
            >
            Agregar Producto
            </button>
          </div>
          <div className="marginBottom">
        <Buscador setShowFiltrados={setShowFiltrados} />
      </div>
          <div >
            <h5>Buscar por categoría:</h5>
            <select onChange={(e) => handleFiltroCategorias(e)}>
              <option key="All" value="All">
                {" "}
                Todas
              </option>
              
              {data[0]
                ? data.map((categories) => {
                    return (
                      <option key={categories.name} value={categories.name}>
                        {categories.name}
                      </option>
                    );
                  })
                : null}
                
            </select>
             
            {data[0] ? (
              
              data.map((categories) => {
                return (
                  <div>
                    <h4>{categories.name}</h4>
                    <ProductsPerCategory
                      productos={categories.productos}
                      setShowDetail={setShowDetail}
                      setInfoDetail={setInfoDetail}
                    />
                  </div>
                );
              })
            ) : (
              <div className="marginTop">
                <h3>No hay productos cargados</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
