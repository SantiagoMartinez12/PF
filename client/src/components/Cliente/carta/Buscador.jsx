import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscaProducto } from '../../../store/actions';
import banner1 from "../../../assets/banners1.jpg";
import banner2 from "../../../assets/banners2.jpg";
import banner3 from "../../../assets/banners3.jpg";



export default function Buscador(){


    const [input, setInput] = useState('');
    
    const handleChange = (e) => {
        setInput(e.target.value);
        };

    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(buscaProducto(input))
        setInput('');
    }
    
    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
              <div class="carousel-item active">
               <img class="d-block w-100" src={banner1} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={banner2} alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={banner3} alt="Third slide"/>
              </div>
             </div>
            </div>
            <br/>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="input-group mb-3" >
                        <input class="form-control"
                        placeholder="Buscar tu producto favorito aquí..."
                        type="text"
                        id="search"
                        name="input"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        />
                        <div className="search_button_container">
                        <button className="search_button" type="submit"  class="btn btn-primary">SEARCH</button>
                        </div>
                    </div >
            </form>
        </div>
    )
}