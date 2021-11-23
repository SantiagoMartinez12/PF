import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscaProducto } from '../../../store/actions';



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
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="search_tile">    
                    <div className="search_input">
                        <input
                        placeholder="Buscar ..."
                        type="text"
                        id="search"
                        name="input"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        />
                    </div >
                    <div className="search_button_container">
                        <button className="search_button" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}