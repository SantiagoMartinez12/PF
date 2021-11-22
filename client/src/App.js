import './App.css';
import React from 'react';
import { Routes,Route  } from 'react-router-dom';
import LandingPageClient from './components/Cliente/landingPageCliente/landingPageCliente.jsx';

import HomeClient from './components/Cliente/homeCliente/homeCliente.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
            <Route exact path='/' element={<LandingPageClient/>}/>
            <Route exact path='/home' element={<HomeClient/>}/>
        </Routes>
    </div>
  );
}

export default App;
