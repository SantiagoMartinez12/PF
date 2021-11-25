import './App.css';
import React from 'react';
import { Routes,Route  } from 'react-router-dom';
import LandingPageClient from './components/Cliente/landingPageCliente/landingPageCliente.jsx';

import HomeClient from './components/Cliente/homeCliente/homeCliente.jsx';
import Product from "../src/components/Resto/product/Product.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
            <Route exact path='/' element={<LandingPageClient/>}/>
            <Route exact path='/home/:name' element={<HomeClient/>}/>
            <Route exact path='/prueba' element={<Product />}/>
        </Routes>
    </div>
  );
}

export default App;
