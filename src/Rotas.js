import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./templates/telas/Home";
import Login from "./templates/telas/Login";
import Perfil from "./templates/telas/Perfil";
import CriarAula from "./templates/telas/CriarAula";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/criar-aula" element={<CriarAula />} />
            </Routes>
        </BrowserRouter>
    )
}