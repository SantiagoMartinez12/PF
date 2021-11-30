import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPageClient from "./components/Cliente/landingPageCliente/landingPageCliente.jsx";

import HomeClient from "./components/Cliente/homeCliente/homeCliente.jsx";
import Setting from "./components/Resto/setting/setting";
import HomeResto from "./components/Resto/home/home";
import Detalle from "./components/Resto/home/detalle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPageClient />} />
        <Route exact path="/home/:name" element={<HomeClient />} />
        <Route path="/home/resto/setting" element={<Setting />} />
        <Route exact path="/:idResto/:idMesa" element={<LandingPageClient />} />
        <Route
          exact
          path="/:idResto/:idMesa/home/:name"
          element={<HomeClient />}
        />
        <Route exact path="/home/resto/" element={<HomeResto/>}/>
        <Route exact path="/detalle/:idMesa" element={<Detalle/>}/>
      </Routes>
    </div>
  );
}

export default App;
