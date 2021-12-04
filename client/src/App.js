import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPageClient from "./components/Cliente/landingPageCliente/landingPageCliente.jsx";
import HomeClient from "./components/Cliente/homeCliente/homeCliente.jsx";
import Setting from "./components/Resto/setting/setting";
import HomeResto from "./components/Resto/home/home";
import Detalle from "./components/Resto/home/detalle";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorQr from "./components/Cliente/landingPageCliente/errorQr";
import LandingPageResto from "./components/Resto/landingPageResto/landigPageResto";
import { useDispatch } from "react-redux";
import modificarUsuario from "./store/actions";
import Usuario from "./components/Resto/setting/usuario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/:idResto/:idMesa" element={<LandingPageClient />} />

        <Route
          exact
          path="/:idResto/:idMesa/home/:name"
          element={<HomeClient />}
        />
        <Route exact path="/" element={<LandingPageResto />} />
        <Route exact path="/home/resto/:restoId" element={<HomeResto />} />
        <Route path="/home/resto/setting/:restoId" element={<Setting />} />
        <Route exact path="/errorQr" element={<ErrorQr />} />
        <Route exact path="/detalle/:idCliente" element={<Detalle />} />
      </Routes>
    </div>
  );
}

export default App;
