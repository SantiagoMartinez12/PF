import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscaProducto } from '../../../store/actions';
import Carrousel from './Carrousel';
var global = require('../../Resto/global.module.css')

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
            <center>
            <h1 className={global.textsubtitle}>¿Qué deseas ordenar?</h1>
            </center>
            <br/>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group mb-3" >
                        <input className="form-control"
                        placeholder="Buscar tu producto favorito aquí..."
                        type="text"
                        id="search"
                        name="input"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        />
                        <div className="search_button_container">
                        <button className="search_button btn btn-primary" type="submit">BUSCAR</button>
                        </div>
                    </div >
            </form>
            
        </div>
    )
}