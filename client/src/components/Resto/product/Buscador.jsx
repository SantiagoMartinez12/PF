import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscaProducto } from '../../../store/actions';
import "./Buscador.css";

export default function Buscador({setShowFiltrados}){


    const [input, setInput] = useState('');
    
    const handleChange = (e) => {
        setInput(e.target.value);
        };

    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(buscaProducto(input))
        setShowFiltrados(true)
        setInput('');
        
    }
    
    return(
        <div>
       
            
            <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='displayFlex'>
                        <input placeholder="Producto..."
                        type="text"
                        id="search"
                        name="input"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        />
                        <div>
                            <button type="submit" className="btn btn-primary me-md-2">Buscar</button>
                        </div>
                    </div >
            </form>
            
        </div>
    )
}