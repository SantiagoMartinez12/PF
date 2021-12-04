import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscaProducto } from '../../../store/actions';
import Carrousel from './Carrousel';

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
            <Carrousel/>
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